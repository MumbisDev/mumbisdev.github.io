'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'> {
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
  const baseStyles = `
    relative inline-flex items-center justify-center
    font-display text-sm uppercase tracking-widest
    border-3 transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 
    focus:ring-offset-brutal-cream dark:focus:ring-offset-brutal-black
  `;
  
  const variants = {
    primary: `
      bg-accent-cyan text-brutal-black border-accent-cyan
      px-8 py-4
      hover:bg-brutal-black dark:hover:bg-brutal-cream hover:text-brutal-cream dark:hover:text-brutal-black hover:border-brutal-black dark:hover:border-brutal-cream
      hover:shadow-brutal-cyan hover:-translate-x-1 hover:-translate-y-1
      active:translate-x-0 active:translate-y-0 active:shadow-none
      disabled:bg-brutal-stone disabled:text-brutal-paper disabled:border-brutal-stone
      disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-none
    `,
    secondary: `
      bg-transparent text-brutal-black dark:text-brutal-cream border-brutal-black dark:border-brutal-cream
      px-8 py-4
      hover:bg-brutal-black dark:hover:bg-brutal-cream hover:text-brutal-cream dark:hover:text-brutal-black
      hover:shadow-brutal-cyan hover:-translate-x-1 hover:-translate-y-1
      active:translate-x-0 active:translate-y-0 active:shadow-none
    `,
    text: `
      bg-transparent text-brutal-black dark:text-brutal-cream border-transparent
      px-4 py-2
      hover:text-accent-cyan
      relative after:absolute after:left-0 after:bottom-2 after:w-0 after:h-0.5 after:bg-accent-cyan
      hover:after:w-full after:transition-all after:duration-300
    `,
  };

  return (
    <motion.button
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
};
