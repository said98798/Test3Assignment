document.addEventListener('DOMContentLoaded', () => {
    const postInput = document.getElementById('postInput');
    const addPostBtn = document.getElementById('addPostBtn');
    const searchInput = document.getElementById('searchInput');
    const postsContainer = document.getElementById('postsContainer');

    const allPosts = []; // kaydi dhammaan posts si aad u isticmaasho search

    // Add new post
    addPostBtn.addEventListener('click', () => {
        const content = postInput.value.trim();
        if (content === '') return;

        const postData = {
            content: content,
            liked: false
        };

        allPosts.unshift(postData); // ku dar bilowga array-ga
        renderPosts(allPosts); // dib u soo bandhig dhammaan posts
        postInput.value = '';
    });

    // Search functionality
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();
        const filtered = allPosts.filter(post => post.content.toLowerCase().includes(query));
        renderPosts(filtered);
    });

    // Function to render posts
    function renderPosts(posts) {
        postsContainer.innerHTML = ''; // nadiifi
        posts.forEach(postData => {
            const postDiv = document.createElement('div');
            postDiv.className = 'post';

            const postContent = document.createElement('p');
            postContent.textContent = postData.content;

            const likeBtn = document.createElement('button');
            likeBtn.textContent = postData.liked ? 'Unlike' : 'Like';
            likeBtn.className = 'like-btn';

            likeBtn.addEventListener('click', () => {
                postData.liked = !postData.liked;
                likeBtn.textContent = postData.liked ? 'Unlike' : 'Like';
                postDiv.classList.toggle('liked', postData.liked);
            });

            postDiv.appendChild(postContent);
            postDiv.appendChild(likeBtn);
            postsContainer.appendChild(postDiv);
        });
    }
});
