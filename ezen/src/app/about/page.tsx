'use client';

import React from 'react';
import AccessibleText from '../components/AccessibleText';

export default function About() {
  return (
    <div className="flex-1 p-8">
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">회사 소개 / About Us</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <AccessibleText size="large">
            EZEN Heavy Equipment은 고품질 건설 중장비의 글로벌 수출 기업으로, 전 세계 고객에게 신뢰할 수 있는 장비를 제공합니다.
            건설 및 수출 산업에서의 오랜 경험을 바탕으로 굴착기, 불도저, 휠로더, 크레인, 덤프트럭 등 다양한 중장비를 공급하고 있습니다.
          </AccessibleText>
          <div className="my-4"></div>
          <AccessibleText size="large">
            EZEN Heavy Equipment is a global exporter of high-quality construction heavy equipment, specializing in delivering reliable machinery to clients worldwide. With years of experience in the construction and export industries, we supply a wide range of heavy equipment including excavators, bulldozers, wheel loaders, cranes, dump trucks, and more.
          </AccessibleText>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">사명과 비전 / Our Mission</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <AccessibleText size="large">
            저희의 사명은 국제 파트너들의 요구에 맞는 내구성 있고 효율적인 건설 솔루션을 제공하는 것입니다.
            신제품과 고품질 중고 장비를 모두 제공하여 모든 프로젝트 규모에 비용 효율적인 옵션을 보장합니다.
          </AccessibleText>
          <div className="my-4"></div>
          <AccessibleText size="large">
            Our mission is to provide durable and efficient construction solutions tailored to the needs of our international partners. We offer both brand-new and high-quality used equipment, ensuring cost-effective options for every project size.
          </AccessibleText>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">종합 서비스 / Comprehensive Service</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">원스톱 서비스 / One-Stop Service</h3>
            <AccessibleText>
              장비 소싱부터 검사, 수출 물류, 판매 후 서비스까지 전체 프로세스를 정확하고 전문적으로 처리합니다.
              저희 팀은 신뢰, 성능, 기술 지원을 기반으로 장기적인 파트너십을 구축하기 위해 최선을 다하고 있습니다.
            </AccessibleText>
            <div className="my-3"></div>
            <AccessibleText>
              From sourcing and inspection to export logistics and after-sales service, EZEN Heavy Equipment handles the entire process with precision and professionalism. Our team is committed to building long-term partnerships based on trust, performance, and technical support.
            </AccessibleText>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">글로벌 서비스 / Global Service</h3>
            <AccessibleText>
              현재 중동, 동남아시아, 아프리카, 남미 등의 지역에 있는 고객에게 서비스를 제공하고 있으며,
              인프라 개발과 산업 성장을 지원하는 중장비를 공급합니다.
            </AccessibleText>
            <div className="my-3"></div>
            <AccessibleText>
              We currently serve clients in regions such as the Middle East, Southeast Asia, Africa, and South America, delivering machines that power infrastructure development and industrial growth.
            </AccessibleText>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">당사의 강점 / Our Strengths</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mb-4">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">품질 보증 / Quality Assurance</h3>
            <AccessibleText>
              모든 장비는 엄격한 품질 검사를 통과하여 최상의 상태로 고객에게 제공됩니다.
            </AccessibleText>
            <div className="my-2"></div>
            <AccessibleText>
              All equipment undergoes rigorous quality inspections to ensure it is delivered in optimal condition.
            </AccessibleText>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mb-4">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">경쟁력 있는 가격 / Competitive Pricing</h3>
            <AccessibleText>
              직접 소싱 및 효율적인 물류를 통해 최적의 가격대를 제공합니다.
            </AccessibleText>
            <div className="my-2"></div>
            <AccessibleText>
              We offer optimal price ranges through direct sourcing and efficient logistics.
            </AccessibleText>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mb-4">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">맞춤형 솔루션 / Tailored Solutions</h3>
            <AccessibleText>
              단일 장비부터 대규모 플릿까지, 모든 고객의 요구 사항에 맞는 맞춤형 솔루션을 제공합니다.
            </AccessibleText>
            <div className="my-2"></div>
            <AccessibleText>
              Whether you are looking for a single machine or a large fleet, we are ready to meet your needs with world-class service.
            </AccessibleText>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">연락처 / Contact Us</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-xl mb-4">
            단일 장비나 대규모 플릿을 찾고 계시든, 세계적 수준의 서비스와 경쟁력 있는 가격으로 귀하의 요구 사항을 충족시킬 준비가 되어 있습니다.
          </p>
          <p className="text-xl mb-6">
            Whether you are looking for a single machine or a large fleet, we are ready to meet your needs with world-class service and competitive pricing.
          </p>
          <div className="flex justify-center">
            <a 
              href="/contact" 
              className="bg-blue-700 text-white text-xl font-semibold py-3 px-8 rounded-lg hover:bg-blue-800 transition"
            >
              문의하기 / Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 