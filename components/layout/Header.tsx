'use client';

import React from 'react';
import { Navigation } from './Navigation';
import { useTheme } from '@/hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

export const Header: React.FC = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <header>
      <Navigation />
      <div className="fixed top-[22px] right-20 md:right-32 z-[60]">
        <button
          onClick={toggleTheme}
          className="p-3 border-2 border-brutal-cream/30 text-brutal-cream hover:border-accent-cyan hover:text-accent-cyan transition-all duration-200 bg-brutal-black/80 backdrop-blur-sm"
          aria-label="Toggle theme"
          disabled={!mounted}
        >
          {mounted && (theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />)}
        </button>
      </div>
    </header>
  );
};
