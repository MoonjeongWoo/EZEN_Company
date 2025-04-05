import React from 'react';

interface AccessibleTextProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  variant?: 'normal' | 'bold';
  className?: string;
}

const AccessibleText: React.FC<AccessibleTextProps> = ({
  children,
  size = 'medium',
  variant = 'normal',
  className = '',
}) => {
  const sizeClasses = {
    small: 'text-lg',
    medium: 'text-xl',
    large: 'text-2xl',
    xlarge: 'text-3xl',
  };

  const variantClasses = {
    normal: 'font-normal',
    bold: 'font-bold',
  };

  return (
    <div
      className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        leading-relaxed
        tracking-wide
        text-gray-900
        dark:text-white
        ${className}
      `}
      style={{
        lineHeight: '1.8',
        letterSpacing: '0.05em',
      }}
    >
      {children}
    </div>
  );
};

export default AccessibleText; 