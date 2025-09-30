import React from 'react';

interface MaterialIconProps {
  children: React.ReactNode;
  className?: string;
}

const MaterialIcon: React.FC<MaterialIconProps> = ({ children, className = '' }) => (
  <span 
    className={`material-symbols-outlined ${className}`} 
    style={{ 
      fontFamily: 'Material Symbols Outlined',
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontSize: '24px',
      display: 'inline-block',
      WebkitFontSmoothing: 'antialiased'
    }}
  >
    {children}
  </span>
);

export default MaterialIcon;
