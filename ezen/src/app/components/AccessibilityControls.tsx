'use client';

import React, { useState } from 'react';

const AccessibilityControls: React.FC = () => {
  const [fontSize, setFontSize] = useState(100); // 기본 폰트 크기 100%
  const [highContrast, setHighContrast] = useState(false);

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 10, 200)); // 최대 200%까지
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 10, 80)); // 최소 80%까지
  };

  const resetFontSize = () => {
    setFontSize(100);
  };

  const toggleHighContrast = () => {
    setHighContrast(prev => !prev);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg z-50">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <button 
            onClick={decreaseFontSize}
            className="bg-blue-500 text-white px-3 py-1 rounded"
            aria-label="글자 크기 줄이기"
          >
            A-
          </button>
          <span className="text-sm">{fontSize}%</span>
          <button 
            onClick={increaseFontSize}
            className="bg-blue-500 text-white px-3 py-1 rounded"
            aria-label="글자 크기 늘리기"
          >
            A+
          </button>
          <button 
            onClick={resetFontSize}
            className="bg-gray-500 text-white px-3 py-1 rounded ml-2"
            aria-label="기본 글자 크기로 되돌리기"
          >
            초기화
          </button>
        </div>
        <button 
          onClick={toggleHighContrast}
          className={`px-3 py-1 rounded ${highContrast ? 'bg-yellow-500 text-black' : 'bg-blue-500 text-white'}`}
          aria-label="고대비 모드 전환"
        >
          고대비 모드 {highContrast ? '끄기' : '켜기'}
        </button>
      </div>
    </div>
  );
};

export default AccessibilityControls; 