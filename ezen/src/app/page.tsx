'use client';

import { motion } from 'framer-motion';
import AccessibilityControls from './components/AccessibilityControls';
import AccessibleText from './components/AccessibleText';

export default function Home() {
  
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const scaleOnHover = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black">
      <AccessibilityControls />
    
      <div className="pt-20 w-full">
        {/* 히어로 섹션 */}
        <motion.section 
          className="relative h-[80vh] w-full flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-[#D4AF37]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* 배경 곡선 효과 */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-r from-[#D4AF37]/20 to-transparent transform rotate-2"></div>
            <div className="absolute bottom-10 w-full h-32 bg-gradient-to-l from-[#D4AF37]/10 to-transparent transform -rotate-2"></div>
          </div>

          <div className="text-center z-10">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 tracking-wider"
              {...fadeInUp}
            >
              이젠(EZEN)무역
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl mb-8 text-[#D4AF37]/90"
              {...fadeInUp}
            >
              건설장비 수출전문기업
            </motion.p>
            <motion.p 
              className="text-xl md:text-2xl mb-12 text-[#D4AF37]/80"
              {...fadeInUp}
            >
              Global Construction Equipment Export Specialist
            </motion.p>
            <motion.button 
              className="bg-[#D4AF37] text-black text-xl font-bold py-4 px-12 rounded-full hover:bg-[#FFD700] transition-colors"
              {...scaleOnHover}
            >
              더 알아보기 / Learn More
            </motion.button>
          </div>
        </motion.section>

        {/* 회사 개요 섹션 */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8 w-full bg-black"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-full max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-[#D4AF37]">회사 개요 / Company Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <motion.div 
                className="bg-gray-900 p-8 rounded-xl border border-[#D4AF37]/20"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <AccessibleText className="text-[#D4AF37]" size="large" variant="bold">
                  EZEN Heavy Equipment은 고품질 건설 중장비의 글로벌 수출 기업으로, 전 세계 고객에게 신뢰할 수 있는 기계를 공급하는 전문 회사입니다.
                </AccessibleText>
              </motion.div>
              <motion.div 
                className="bg-gray-900 p-8 rounded-xl border border-[#D4AF37]/20"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <AccessibleText className="text-gray-300" size="large">
                  EZEN Heavy Equipment is a global exporter of high-quality construction equipment, specializing in delivering reliable machinery worldwide.
                </AccessibleText>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* 사업 영역 섹션 */}
        <motion.section 
          className="py-20 bg-gray-900 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-[#D4AF37]">사업 영역 / Business Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: '굴착기 / Excavators',
                  description: '다양한 크기와 사양의 굴착기를 제공합니다.',
                  icon: '🚜'
                },
                {
                  title: '휠로더 / Wheel Loaders',
                  description: '효율적인 자재 운반을 위한 다양한 휠로더를 공급합니다.',
                  icon: '🚛'
                },
                {
                  title: '크레인 / Cranes',
                  description: '다양한 크기와 용량의 크레인을 제공합니다.',
                  icon: '🏗️'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-black p-8 rounded-xl border border-[#D4AF37]/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ y: -10, borderColor: '#D4AF37' }}
                  viewport={{ once: true }}
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">{item.title}</h3>
                  <AccessibleText className="text-gray-300">{item.description}</AccessibleText>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 서비스 지역 섹션 */}
        <motion.section 
          className="py-20 w-full bg-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-[#D4AF37]">서비스 지역 / Service Regions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { region: '중동 / Middle East', countries: 'UAE, 사우디아라비아, 카타르' },
                { region: '동남아시아 / Southeast Asia', countries: '베트남, 필리핀, 인도네시아' },
                { region: '아프리카 / Africa', countries: '나이지리아, 케냐, 남아공' },
                { region: '남미 / South America', countries: '브라질, 칠레, 콜롬비아' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900 p-8 rounded-xl border border-[#D4AF37]/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, borderColor: '#D4AF37' }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-[#D4AF37] mb-4">{item.region}</h3>
                  <p className="text-gray-300">{item.countries}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
} 