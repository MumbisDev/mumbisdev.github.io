'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface CardProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  href,
  className = '',
  onClick,
}) => {
  const cardClasses = `
    bg-brutal-charcoal border-3 border-brutal-ink
    transition-all duration-200 ease-[cubic-bezier(0.2,0,0,1)]
    hover:border-accent-cyan
    hover:shadow-brutal-cyan hover:-translate-x-1 hover:-translate-y-1
    group
  `;
  const hasFlex = className.includes('flex');
  const linkClassName = hasFlex ? 'block h-full' : 'block';

  const content = (
    <motion.div
      className={`${cardClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className={linkClassName}>
        {content}
      </Link>
    );
  }

  return content;
};
