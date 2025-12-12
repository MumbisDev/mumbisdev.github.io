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
  const cardClasses = 'bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5';
  const hasFlex = className.includes('flex');
  const linkClassName = hasFlex ? 'block h-full' : 'block';

  const content = (
    <motion.div
      whileHover={{ y: -2 }}
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

