import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ href, children, className = '', onClick }) => {
  const isExternal = href.startsWith('http');
  
  if (isExternal) {
    return (
      <a 
        href={href} 
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  
  return (
    <a 
      href={href} 
      className={className}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {children}
    </a>
  );
};