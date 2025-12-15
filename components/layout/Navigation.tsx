'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export const Navigation: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-brutal-black/95 backdrop-blur-sm border-b-3 border-brutal-charcoal z-50 h-[80px]">
        <div className="container-brutal h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group relative">
            <span className="font-display text-3xl text-brutal-cream tracking-tight">
              Z.O.C
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-accent-vermillion transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-6 py-3 font-display text-sm tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'text-accent-cyan'
                      : 'text-brutal-cream hover:text-accent-gold'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-accent-cyan"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Decorative Element */}
          <div className="hidden md:flex items-center gap-3">
            <div className="w-3 h-3 bg-accent-cyan" />
            <div className="w-3 h-3 border-2 border-accent-gold" />
            <div className="w-3 h-3 bg-brutal-cream" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-brutal-cream hover:text-accent-cyan transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-brutal-black/80 z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.2, 0, 0, 1] }}
              className="fixed top-[80px] right-0 bottom-0 w-80 bg-brutal-charcoal border-l-3 border-accent-cyan z-50 md:hidden overflow-y-auto"
            >
              <div className="flex flex-col p-6">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-4 border-b border-brutal-ink ${
                          isActive
                            ? 'text-accent-cyan'
                            : 'text-brutal-cream hover:text-accent-gold'
                        }`}
                      >
                        <span className="font-display text-2xl tracking-wider">{item.label}</span>
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Decorative elements */}
                <div className="mt-12 flex gap-4">
                  <div className="w-12 h-12 border-3 border-accent-cyan" />
                  <div className="w-12 h-12 bg-accent-gold" />
                  <div className="w-12 h-12 border-3 border-brutal-cream rounded-full" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
