import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
    return (
        <aside className="w-64 bg-gray-100 min-h-screen p-6">
            <h2 className="text-xl font-semibold mb-6 text-gray-700">EZEN Company</h2>
            <nav>
                <ul className="space-y-4">
                    <li className="border-b pb-2">
                        <h3 className="font-medium text-gray-600 mb-2">회사 정보</h3>
                        <ul className="pl-4 space-y-2">
                            <li><Link href="/about" className="text-gray-600 hover:text-blue-600">회사 소개</Link></li>
                            <li><Link href="/about/history" className="text-gray-600 hover:text-blue-600">회사 연혁</Link></li>
                            <li><Link href="/about/vision" className="text-gray-600 hover:text-blue-600">비전 및 미션</Link></li>
                        </ul>
                    </li>
                    <li className="border-b pb-2">
                        <h3 className="font-medium text-gray-600 mb-2">서비스</h3>
                        <ul className="pl-4 space-y-2">
                            <li><Link href="/services" className="text-gray-600 hover:text-blue-600">서비스 개요</Link></li>
                            <li><Link href="/services/web" className="text-gray-600 hover:text-blue-600">웹 서비스</Link></li>
                            <li><Link href="/services/mobile" className="text-gray-600 hover:text-blue-600">모바일 서비스</Link></li>
                        </ul>
                    </li>
                    <li className="border-b pb-2">
                        <h3 className="font-medium text-gray-600 mb-2">제품</h3>
                        <ul className="pl-4 space-y-2">
                            <li><Link href="/products" className="text-gray-600 hover:text-blue-600">제품 목록</Link></li>
                            <li><Link href="/products/solution" className="text-gray-600 hover:text-blue-600">솔루션</Link></li>
                            <li><Link href="/products/development" className="text-gray-600 hover:text-blue-600">개발 사례</Link></li>
                        </ul>
                    </li>
                    <li>
                        <h3 className="font-medium text-gray-600 mb-2">고객 지원</h3>
                        <ul className="pl-4 space-y-2">
                            <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">문의하기</Link></li>
                            <li><Link href="/faq" className="text-gray-600 hover:text-blue-600">자주 묻는 질문</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar; 