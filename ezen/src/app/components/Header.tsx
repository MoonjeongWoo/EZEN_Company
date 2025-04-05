'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';

const Header = () => {
  const pathname = usePathname();
  const [hasMounted, setHasMounted] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const menuItems = [
    { name: '회사소개', path: '/', icon: '🏠' },
    { name: '사업영역', path: '/business', icon: '💼' },
    { name: '장비소개', path: '/equipment', icon: '🚜' },
    { name: '문의하기', path: '/contact', icon: '📞' }
  ];

  return (
    <>
      <header className="bg-black fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between relative">
            <div className="flex items-center">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 rounded-md hover:bg-gray-900"
                aria-label="메뉴 열기"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className="h-0.5 w-full bg-[#D4AF37] transform transition-all duration-300" />
                  <span className="h-0.5 w-full bg-[#D4AF37] transition-all duration-300" />
                  <span className="h-0.5 w-full bg-[#D4AF37] transform transition-all duration-300" />
                </div>
              </button>

              <Link href="/" className="flex items-center ml-4">
                <h1 className="text-2xl font-bold text-[#D4AF37] whitespace-nowrap tracking-wider">
                  이젠(EZEN)무역
                </h1>
              </Link>
            </div>

            {hasMounted && (
              <nav className="hidden md:flex space-x-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`px-3 py-2 text-sm font-medium transition-colors relative group
                      ${pathname === item.path ? 'text-[#D4AF37]' : 'text-gray-300 hover:text-[#D4AF37]'}
                    `}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300
                      ${pathname === item.path ? 'scale-x-100' : ''}
                    `} />
                  </Link>
                ))}
              </nav>
            )}
          </div>
        </div>
      </header>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        menuItems={menuItems}
        pathname={pathname}
      />
    </>
  );
};

export default Header;
