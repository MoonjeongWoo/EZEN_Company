import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-xl font-bold mb-4">EZEN Heavy Equipment</h3>
            <p className="text-gray-400">글로벌 건설 중장비 수출 전문 기업</p>
            <p className="text-gray-400 mt-2">Global Construction Equipment Exporter</p>
          </div>
          
          {/* 연락처 정보 */}
          <div>
            <h3 className="text-xl font-bold mb-4">연락처 / Contact</h3>
            <p className="text-gray-400">전화 / Tel: +82-2-1234-5678</p>
            <p className="text-gray-400">이메일 / Email: info@ezen-equipment.com</p>
            <p className="text-gray-400">팩스 / Fax: +82-2-1234-5679</p>
          </div>
          
          {/* 주소 */}
          <div>
            <h3 className="text-xl font-bold mb-4">주소 / Address</h3>
            <p className="text-gray-400">서울특별시 강남구 테헤란로 123</p>
            <p className="text-gray-400">123 Teheran-ro, Gangnam-gu, Seoul, Korea</p>
          </div>
        </div>
        
        {/* 저작권 */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 EZEN Heavy Equipment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 