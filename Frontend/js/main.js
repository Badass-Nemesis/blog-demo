document.addEventListener('DOMContentLoaded', () => {
    const postList = document.getElementById('post-list');
    const upcomingPostList = document.getElementById('upcoming-post-list');
    const upcomingPostsSection = document.getElementById('upcoming-posts-section');
    const courseList = document.getElementById('course-list');

    // Fetch posts from the API
    fetch('http://localhost:3000/api/posts')
        .then(response => response.json())
        .then(posts => {
            const now = new Date();
            let upcomingPostsExist = false;

            posts.forEach(post => {
                const publishTime = new Date(post.publish_time);

                if (publishTime > now) {
                    upcomingPostsExist = true;
                    const li = document.createElement('li');
                    li.classList.add('post-item');

                    li.innerHTML = `
                        <h3>${post.title}</h3>
                        <p>Publishing in: <span class="countdown" data-time="${publishTime.toISOString()}"></span></p>
                    `;

                    upcomingPostList.appendChild(li);
                } else {
                    const li = document.createElement('li');
                    li.classList.add('post-item');

                    const contentPreview = post.content.substring(0, 100) + '...';
                    li.innerHTML = `
                        <a href="posts.html?id=${post.id}">${post.title}</a>
                        <p>${contentPreview}</p>
                        <p class="publish-time">Posted on: ${publishTime.toLocaleDateString()}</p>
                    `;

                    postList.appendChild(li);
                }
            });

            if (upcomingPostsExist) {
                upcomingPostsSection.style.display = 'block';
                startCountdown();
            }
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });

    // Fetch courses from the API
    fetch('http://localhost:3000/api/courses')
        .then(response => response.json())
        .then(courses => {
            courses.forEach(course => {
                const li = document.createElement('li');
                li.classList.add('course-item');

                const discountPercentage = parseFloat(course.discount).toFixed(2);
                li.innerHTML = `
                    <div class="course-discount">${discountPercentage}% OFF</div>
                    <a href="courses.html?id=${course.id}">
                        <h3>${course.name}</h3>
                        <p>${course.description}</p>
                        <p>Price: ₹${(course.price - (course.price * (course.discount / 100))).toFixed(2)} <span class="original-price">₹${course.price}</span></p>
                    </a>
                `;

                courseList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching courses:', error);
        });
});

// Function to start countdown
function startCountdown() {
    const countdownElements = document.querySelectorAll('.countdown');

    countdownElements.forEach(element => {
        const publishTime = new Date(element.getAttribute('data-time'));

        function updateCountdown() {
            const now = new Date();
            const timeDiff = publishTime - now;

            if (timeDiff <= 0) {
                element.innerHTML = 'Available now!';
                return;
            }

            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            element.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

            setTimeout(updateCountdown, 1000);
        }

        updateCountdown();
    });
}
