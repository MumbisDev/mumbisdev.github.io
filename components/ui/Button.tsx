'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'uppercase tracking-wider transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black';
  
  const variants = {
    primary: 'bg-black text-white border border-black px-8 py-3.5 text-xs font-medium hover:bg-neutral-800 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 disabled:bg-neutral-300 disabled:text-neutral-400 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none',
    secondary: 'bg-transparent text-black border border-black px-8 py-3.5 text-xs font-medium hover:bg-black hover:text-white',
    text: 'bg-transparent text-black px-4 py-2 text-xs font-normal underline hover:text-neutral-600',
  };

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
};

