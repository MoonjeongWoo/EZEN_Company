'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const About: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pathname = usePathname();

    const menuItems = [
        { name: '회사소개', path: '/', icon: '🏠' },
        { name: '사업영역', path: '/business', icon: '💼' },
        { name: '장비소개', path: '/equipment', icon: '🚜' },
        { name: '문의하기', path: '/contact', icon: '📞' }
    ];

    return (
        <div>
            <Header />
            <div style={{ display: 'flex' }}>
                <Sidebar 
                    isOpen={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                    menuItems={menuItems}
                    pathname={pathname}
                />
                <main>
                    <h1>About Page</h1>
                    <p>This is the about page content.</p>
                </main>
            </div>
        </div>
    );
};

export default About;
