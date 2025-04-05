import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md py-4 px-6">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <div className="mr-2">
                        {/* 회사 로고 추가 (로고 이미지가 있다면 public 폴더에 넣고 경로 수정) */}
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                            EZ
                        </div>
                    </div>
                    <h1 className="text-xl font-bold text-gray-800">EZEN Company</h1>
                </div>
                <nav>
                    <ul className="flex space-x-6">
                        <li><Link href="/" className="text-gray-600 hover:text-blue-600">홈</Link></li>
                        <li><Link href="/about" className="text-gray-600 hover:text-blue-600">회사소개</Link></li>
                        <li><Link href="/services" className="text-gray-600 hover:text-blue-600">서비스</Link></li>
                        <li><Link href="/products" className="text-gray-600 hover:text-blue-600">제품</Link></li>
                        <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">연락처</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header; 