import React from 'react';

const Sidebar = ({ setCurrentView }) => {
    return (
        <div id="sidebar">
            <div id="logo">
                <h2>Duora</h2>
            </div>
            <nav>
                <ul>
                    <li><a href="#" onClick={() => setCurrentView('createPost')}>Create Post</a></li>
                    <li><a href="#" onClick={() => setCurrentView('blogList')}>Blog List</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
