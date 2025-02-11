import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import CreatePostForm from './CreatePostForm';
import BlogList from './BlogList';
import Notification from './Notification';

const App = () => {
    const [currentView, setCurrentView] = useState('blogList');
    const [posts, setPosts] = useState([]);
    const [notification, setNotification] = useState('');

    useEffect(() => {
        const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        setPosts(savedPosts);
    }, []);

    const savePosts = (newPosts) => {
        localStorage.setItem('posts', JSON.stringify(newPosts));
        setPosts(newPosts);
    };

    const showNotification = (message) => {
        setNotification(message);
        setTimeout(() => setNotification(''), 3000);
    };

    return (
        <div>
            <Sidebar setCurrentView={setCurrentView} />
            <div id="main-content">
                {currentView === 'createPost' && (
                    <CreatePostForm 
                        posts={posts} 
                        savePosts={savePosts} 
                        showNotification={showNotification} 
                        setCurrentView={setCurrentView}
                    />
                )}
                {currentView === 'blogList' && (
                    <BlogList 
                        posts={posts} 
                        savePosts={savePosts} 
                        showNotification={showNotification}
                        setCurrentView={setCurrentView}
                    />
                )}
                <Notification message={notification} />
            </div>
        </div>
    );
};

export default App;
