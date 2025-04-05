'use client';

import React from 'react';
// import Image from 'next/image';
import AccessibilityControls from './components/AccessibilityControls';
import AccessibleText from './components/AccessibleText';

export default function Home() {
  return (
    <div className="flex-1 p-8">
      {/* 접근성 컨트롤 추가 */}
      <AccessibilityControls />
      
      {/* 히어로 섹션 */}
      <section className="mb-16 text-center">
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-24 px-6 rounded-lg shadow-lg">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">EZEN Heavy Equipment</h1>
          <p className="text-2xl md:text-3xl mb-10 leading-relaxed">글로벌 건설 중장비 수출 전문 기업</p>
          <p className="text-xl md:text-2xl mb-10 leading-relaxed">Global Exporter of High-Quality Construction Equipment</p>
          <button className="bg-white text-blue-700 text-xl font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition">
            더 알아보기 / Learn More
          </button>
        </div>
      </section>

      {/* 회사 소개 섹션 */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">회사 소개 / Company Introduction</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <AccessibleText size="large" variant="bold">
              EZEN Heavy Equipment은 고품질 건설 중장비의 글로벌 수출 기업으로, 전 세계 고객에게 신뢰할 수 있는 기계를 공급하는 전문 회사입니다.
              건설 및 수출 산업에서의 오랜 경험을 바탕으로 굴착기, 불도저, 휠로더, 크레인, 덤프트럭 등 다양한 중장비를 공급합니다.
            </AccessibleText>
            <div className="mb-6"></div>
            <AccessibleText size="large">
              EZEN Heavy Equipment is a global exporter of high-quality construction heavy equipment, specializing in delivering reliable machinery to clients worldwide. With years of experience in the construction and export industries, we supply a wide range of heavy equipment including excavators, bulldozers, wheel loaders, cranes, dump trucks, and more.
            </AccessibleText>
          </div>
          <div className="bg-gray-200 rounded-lg flex items-center justify-center min-h-[250px]">
            <p className="text-xl text-gray-600 italic">중장비 이미지 / Equipment Image</p>
            {/* 실제 이미지가 있다면 아래 주석을 해제하고 경로를 수정하세요 */}
            {/* <Image src="/heavy-equipment.jpg" alt="Heavy Equipment" width={500} height={300} className="rounded-lg" /> */}
          </div>
        </div>
      </section>

      {/* 주요 서비스 섹션 */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">취급 장비 / Our Equipment</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">굴착기 / Excavators</h3>
            <AccessibleText>
              다양한 크기와 사양의 굴착기를 제공합니다. 신형 및 중고 모델 모두 가능합니다.
            </AccessibleText>
            <div className="mb-2"></div>
            <AccessibleText>
              We offer excavators of various sizes and specifications. Both new and used models available.
            </AccessibleText>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">휠로더 / Wheel Loaders</h3>
            <AccessibleText>
              효율적인 자재 운반을 위한 다양한 휠로더를 공급합니다. 경제적이고 내구성이 뛰어납니다.
            </AccessibleText>
            <div className="mb-2"></div>
            <AccessibleText>
              Supply various wheel loaders for efficient material handling. Economical and durable.
            </AccessibleText>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">크레인 / Cranes</h3>
            <AccessibleText>
              다양한 크기와 용량의 크레인을 제공합니다. 건설 현장의 중요한 장비입니다.
            </AccessibleText>
            <div className="mb-2"></div>
            <AccessibleText>
              We provide cranes of various sizes and capacities. Essential equipment for construction sites.
            </AccessibleText>
          </div>
        </div>
      </section>

      {/* 서비스 지역 섹션 */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">서비스 지역 / Service Regions</h2>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="w-64 h-32 bg-white shadow-md rounded flex flex-col items-center justify-center p-4">
            <span className="text-xl font-semibold text-blue-700">중동 / Middle East</span>
            <span className="text-lg text-gray-600 mt-2">UAE, 사우디아라비아, 카타르</span>
          </div>
          <div className="w-64 h-32 bg-white shadow-md rounded flex flex-col items-center justify-center p-4">
            <span className="text-xl font-semibold text-blue-700">동남아시아 / Southeast Asia</span>
            <span className="text-lg text-gray-600 mt-2">베트남, 필리핀, 인도네시아</span>
          </div>
          <div className="w-64 h-32 bg-white shadow-md rounded flex flex-col items-center justify-center p-4">
            <span className="text-xl font-semibold text-blue-700">아프리카 / Africa</span>
            <span className="text-lg text-gray-600 mt-2">나이지리아, 케냐, 남아공</span>
          </div>
          <div className="w-64 h-32 bg-white shadow-md rounded flex flex-col items-center justify-center p-4">
            <span className="text-xl font-semibold text-blue-700">남미 / South America</span>
            <span className="text-lg text-gray-600 mt-2">브라질, 칠레, 콜롬비아</span>
          </div>
        </div>
      </section>
    </div>
  );
} 