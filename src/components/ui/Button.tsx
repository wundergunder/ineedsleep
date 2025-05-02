import React from 'react';
import { Link } from './Link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500';
  
  const variantStyles = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    secondary: 'bg-purple-500 text-white hover:bg-purple-600',
    outline: 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-5 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={styles} onClick={onClick}>
        {children}
      </Link>
    );
  }
  
  return (
    <button type={type} className={styles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;