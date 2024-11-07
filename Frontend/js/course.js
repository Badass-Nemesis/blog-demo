document.addEventListener('DOMContentLoaded', () => {
    const courseList = document.getElementById('course-list');
    const courseContent = document.getElementById('course-content');
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id');

    if (courseId) {
        // Fetch the full course details
        fetch(`http://localhost:3000/api/courses/${courseId}`)
            .then(response => response.json())
            .then(course => {
                if (course && course.name && course.description && course.price !== undefined && course.discount !== undefined) {
                    const discountedPrice = (course.price - (course.price * (course.discount / 100))).toFixed(2);
                    courseContent.innerHTML = `
                        <div class="single-course-container">
                            <div class="course-discount">${course.discount}% OFF</div>
                            <h2>${course.name}</h2>
                            <p class="course-description">${course.description}</p>
                            <p class="course-price">Price: ₹${discountedPrice} <span class="original-price">₹${course.price}</span></p>
                        </div>
                    `;
                } else {
                    courseContent.innerHTML = '<p>Error: Course data is missing or incomplete.</p>';
                }
            })
            .catch(error => {
                console.error('Error fetching course:', error);
                courseContent.innerHTML = '<p>Error loading course details.</p>';
            });
    } else if (courseList) {
        // Fetch all courses
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
    }
});
