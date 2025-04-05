'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AccessibilityControls: React.FC = () => {
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 10, 200));
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 10, 80));
  };

  const resetFontSize = () => {
    setFontSize(100);
  };

  const toggleHighContrast = () => {
    setHighContrast(prev => !prev);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.button
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 right-0 bg-white p-4 rounded-lg shadow-lg"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <motion.button 
                  onClick={decreaseFontSize}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  A-
                </motion.button>
                <motion.span 
                  className="text-sm"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                >
                  {fontSize}%
                </motion.span>
                <motion.button 
                  onClick={increaseFontSize}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  A+
                </motion.button>
                <motion.button 
                  onClick={resetFontSize}
                  className="bg-gray-500 text-white px-3 py-1 rounded ml-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  초기화
                </motion.button>
              </div>
              <motion.button 
                onClick={toggleHighContrast}
                className={`px-3 py-1 rounded ${highContrast ? 'bg-yellow-500 text-black' : 'bg-blue-500 text-white'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                고대비 모드 {highContrast ? '끄기' : '켜기'}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccessibilityControls; 