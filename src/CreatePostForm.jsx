import React, { useState } from 'react';

const CreatePostForm = ({ posts, savePosts, showNotification, setCurrentView }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPosts = [...posts, { title, content, views: 0 }];
        savePosts(newPosts);
        showNotification('Post created successfully!');
        setCurrentView('blogList');
    };

    return (
        <div id="create-post-form" className="form-container">
            <h2>Create Blog Post</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title" 
                    required 
                />
                <textarea 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Content" 
                    required 
                />
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
};

export default CreatePostForm;
