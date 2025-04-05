import React from 'react';

export default function Services() {
  return (
    <div className="flex-1 p-8">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">서비스</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-700 mb-4">
            EZEN Company는 고객의 비즈니스 성공을 위한 다양한 기술 솔루션을 제공합니다.
            우리의 전문 팀은 고객의 요구사항을 면밀히 분석하고, 최적의 솔루션을 설계하여 제공합니다.
          </p>
          <p className="text-gray-700">
            모든 프로젝트는 철저한 품질 관리 프로세스를 거쳐 완성되며, 프로젝트 완료 후에도 지속적인 지원과 유지보수 서비스를 제공합니다.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">주요 서비스</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 웹 개발 서비스 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500 italic">웹 개발 이미지</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">웹 개발</h3>
              <p className="text-gray-600 mb-4">
                반응형 웹사이트부터 복잡한 웹 애플리케이션까지, 사용자 경험을 최우선으로 고려한 웹 솔루션을 제공합니다.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>기업 웹사이트 개발</li>
                <li>이커머스 플랫폼 구축</li>
                <li>웹 애플리케이션 개발</li>
                <li>프론트엔드 & 백엔드 개발</li>
                <li>CMS 구축 및 커스터마이징</li>
              </ul>
            </div>
          </div>

          {/* 모바일 앱 개발 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500 italic">모바일 앱 개발 이미지</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">모바일 앱 개발</h3>
              <p className="text-gray-600 mb-4">
                Android 및 iOS 플랫폼을 위한 직관적이고 고성능의 모바일 애플리케이션을 개발합니다.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>네이티브 앱 개발</li>
                <li>크로스 플랫폼 앱 개발</li>
                <li>모바일 UI/UX 디자인</li>
                <li>앱 유지보수 및 업데이트</li>
                <li>앱 스토어 등록 및 최적화</li>
              </ul>
            </div>
          </div>

          {/* 데이터 분석 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500 italic">데이터 분석 이미지</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">데이터 분석</h3>
              <p className="text-gray-600 mb-4">
                빅데이터를 수집, 처리, 분석하여 비즈니스 의사결정에 도움이 되는 인사이트를 제공합니다.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>비즈니스 인텔리전스 솔루션</li>
                <li>데이터 시각화</li>
                <li>예측 분석</li>
                <li>맞춤형 리포팅 시스템</li>
                <li>데이터 마이닝</li>
              </ul>
            </div>
          </div>

          {/* 클라우드 서비스 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500 italic">클라우드 서비스 이미지</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">클라우드 서비스</h3>
              <p className="text-gray-600 mb-4">
                안정적이고 확장 가능한 클라우드 인프라를 구축하여 비즈니스 효율성을 높입니다.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>클라우드 마이그레이션</li>
                <li>클라우드 인프라 설계</li>
                <li>서버리스 아키텍처</li>
                <li>클라우드 보안 솔루션</li>
                <li>하이브리드 클라우드 구축</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">서비스 프로세스</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 mx-auto">
                <span className="font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold mb-2">요구사항 분석</h3>
              <p className="text-gray-600 text-sm">
                고객의 비즈니스 목표와 요구사항을 면밀히 분석합니다.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 mx-auto">
                <span className="font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold mb-2">설계</h3>
              <p className="text-gray-600 text-sm">
                요구사항을 바탕으로 최적의 솔루션을 설계합니다.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 mx-auto">
                <span className="font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold mb-2">개발</h3>
              <p className="text-gray-600 text-sm">
                설계를 바탕으로 솔루션을 개발하고 테스트합니다.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 mx-auto">
                <span className="font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold mb-2">배포</h3>
              <p className="text-gray-600 text-sm">
                완성된 솔루션을 고객 환경에 배포합니다.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 mx-auto">
                <span className="font-bold text-xl">5</span>
              </div>
              <h3 className="font-semibold mb-2">유지보수</h3>
              <p className="text-gray-600 text-sm">
                지속적인 모니터링과 업데이트로 서비스를 관리합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 