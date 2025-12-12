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
      <div className="fixed top-[30px] right-4 md:right-6 z-[60] -translate-y-1/2">
        <button
          onClick={toggleTheme}
          className="p-2 text-black hover:text-neutral-600 transition-colors bg-white shadow-sm"
          aria-label="Toggle theme"
          disabled={!mounted}
        >
          {mounted && (theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />)}
        </button>
      </div>
    </header>
  );
};

