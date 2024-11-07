document.addEventListener('DOMContentLoaded', () => {
    const postContent = document.getElementById('post-content');
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (postId) {
        // Fetch the full post content
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
    } else {
        postContent.innerHTML = '<p>No post ID provided.</p>';
    }
});
