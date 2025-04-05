'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react'; // X 아이콘 (lucide-react 설치되어 있어야 함)

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: Array<{
    name: string;
    path: string;
    icon: string;
  }>;
  pathname: string;
}

const Sidebar = ({ isOpen, onClose, menuItems, pathname }: SidebarProps) => {
  return (
    <>
      {/* 사이드바 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 h-screen w-72 bg-black shadow-lg z-[9999]"
          >
            {/* 닫기 버튼 */}
            <div className="absolute top-4 right-4">
              <button
                onClick={onClose}
                aria-label="사이드바 닫기"
                className="text-[#D4AF37] hover:text-[#FFD700] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="pt-20 px-6">
              <h2 className="text-xl font-bold text-[#D4AF37] mb-8 pl-4 border-b border-[#D4AF37] pb-2">
                메뉴
              </h2>
              <nav>
                <ul className="space-y-4">
                  {menuItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        href={item.path}
                        className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 
                          ${pathname === item.path 
                            ? 'bg-gradient-to-r from-[#D4AF37]/20 to-transparent text-[#D4AF37]' 
                            : 'text-gray-300 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]'
                          }`}
                        onClick={onClose}
                      >
                        <span className="mr-3">{item.icon}</span>
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 오버레이 */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black z-40"
          onClick={onClose}
        />
      )}
    </>
  );
};

export default Sidebar;
