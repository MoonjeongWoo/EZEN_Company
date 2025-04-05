import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const About: React.FC = () => {
    return (
        <div>
            <Header />
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <main>
                    <h1>About Page</h1>
                    <p>This is the about page content.</p>
                </main>
            </div>
        </div>
    );
};

export default About;
