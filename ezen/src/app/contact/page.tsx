import React from 'react';

export default function Contact() {
  return (
    <div className="flex-1 p-8">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">문의하기</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-700 mb-6">
            EZEN Company에 관심을 가져주셔서 감사합니다. 서비스 문의, 협업 제안, 또는 기타 문의사항이 있으시면 아래 양식을 통해 문의해 주세요.
            빠른 시일 내에 답변 드리겠습니다.
          </p>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">이름 *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">이메일 *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">전화번호</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">제목 *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">문의내용 *</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            
            <div>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                문의하기
              </button>
            </div>
          </form>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">연락처 정보</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">전화</h3>
            <p className="text-gray-600">
              02-123-4567
            </p>
            <p className="text-gray-500 text-sm mt-1">
              평일: 9:00 AM - 6:00 PM
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">이메일</h3>
            <p className="text-gray-600">
              info@ezencompany.com
            </p>
            <p className="text-gray-500 text-sm mt-1">
              24시간 이내 답변 드립니다
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">주소</h3>
            <p className="text-gray-600">
              서울특별시 강남구 테헤란로 123<br />
              EZEN 빌딩 5층
            </p>
            <p className="text-gray-500 text-sm mt-1">
              지하철 2호선 강남역 3번 출구에서 도보 5분
            </p>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">오시는 길</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* 실제 지도를 삽입하려면 Google Maps 또는 Kakao Maps API를 사용할 수 있습니다 */}
          <div className="h-96 bg-gray-200 flex items-center justify-center mb-4">
            <p className="text-gray-500 italic">지도 이미지</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">대중교통 이용안내</h3>
            <p className="text-gray-700 mb-4">
              지하철: 2호선 강남역 3번 출구에서 도보 5분<br />
              버스: 강남역 정류장 하차 (간선: 146, 301, 342 / 지선: 2413, 3414)
            </p>
            <h3 className="text-lg font-semibold mb-2">주차안내</h3>
            <p className="text-gray-700">
              EZEN 빌딩 지하 주차장 이용 가능 (1시간 무료 주차)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 