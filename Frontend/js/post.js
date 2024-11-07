document.addEventListener('DOMContentLoaded', () => {
    const postContent = document.getElementById('post-content');
    const allPostList = document.getElementById('all-post-list');
    const upcomingPostList = document.getElementById('upcoming-post-list');
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (postId) {
        // Fetch the full post content for a single post
        fetch(`http://localhost:3000/api/posts/${postId}`)
            .then(response => response.json())
            .then(post => {
                postContent.innerHTML = `
                    <div class="single-post-container">
                        <h2>${post.title}</h2>
                        <p class="post-time">Posted on: ${new Date(post.publish_time).toLocaleDateString()}</p>
                        <div>${post.content}</div>
                    </div>
                `;
            })
            .catch(error => {
                console.error('Error fetching post:', error);
                postContent.innerHTML = '<p>Error loading post content.</p>';
            });
    } else if (allPostList) {
        // Fetch all published posts
        fetch('http://localhost:3000/api/posts')
            .then(response => response.json())
            .then(posts => {
                const now = new Date();
                const publishedPosts = posts.filter(post => new Date(post.publish_time) <= now);

                publishedPosts.forEach(post => {
                    const li = document.createElement('li');
                    li.classList.add('post-item');

                    const contentPreview = post.content.substring(0, 100) + '...';
                    const publishTime = new Date(post.publish_time).toLocaleDateString();

                    li.innerHTML = `
                        <a href="posts.html?id=${post.id}">${post.title}</a>
                        <p>${contentPreview}</p>
                        <p class="publish-time">Posted on: ${publishTime}</p>
                    `;

                    allPostList.appendChild(li);
                });
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    } else if (upcomingPostList) {
        // Fetch upcoming posts
        fetch('http://localhost:3000/api/posts')
            .then(response => response.json())
            .then(posts => {
                const now = new Date();
                const upcomingPosts = posts.filter(post => new Date(post.publish_time) > now);

                upcomingPosts.forEach(post => {
                    const li = document.createElement('li');
                    li.classList.add('post-item');

                    li.innerHTML = `
                        <h3>${post.title}</h3>
                        <p>Publishing in: <span class="countdown" data-time="${new Date(post.publish_time).toISOString()}"></span></p>
                    `;

                    upcomingPostList.appendChild(li);
                });

                startCountdown();
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    } else {
        postContent.innerHTML = '<p>No post ID provided.</p>';
    }
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
