import React from 'react';

const BlogList = ({ posts, savePosts, showNotification, setCurrentView }) => {
    const deletePost = (index) => {
        const newPosts = posts.filter((_, i) => i !== index);
        savePosts(newPosts);
        showNotification('Post deleted!');
    };

    const editPost = (index) => {
        const newTitle = prompt("Enter new title:", posts[index].title);
        const newContent = prompt("Enter new content:", posts[index].content);
        if (newTitle && newContent) {
            const newPosts = [...posts];
            newPosts[index] = { ...newPosts[index], title: newTitle, content: newContent };
            savePosts(newPosts);
            showNotification('Post updated!');
        }
    };

    const incrementViews = (index) => {
        const newPosts = [...posts];
        newPosts[index] = { ...newPosts[index], views: (newPosts[index].views || 0) + 1 };
        savePosts(newPosts);
    };

    return (
        <div id="blog-list" className="blog-list">
            <h2>Blog List</h2>
            {posts.map((post, index) => (
                <div key={index} className="blog-item">
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <p>Views: {post.views || 0}</p>
                    <button onClick={() => incrementViews(index)}>View</button>
                    <button onClick={() => editPost(index)}>Edit</button>
                    <button onClick={() => deletePost(index)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
