'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Code2, Sparkles, Layers, MousePointer2 } from 'lucide-react';

interface PortfolioShowcaseProps {
  technologies: string[];
}

export function PortfolioShowcase({ technologies }: PortfolioShowcaseProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div className="space-y-8">
      {/* Main recursive display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Browser frame */}
        <div className="border-4 border-brutal-charcoal dark:border-brutal-ink bg-brutal-paper dark:bg-brutal-charcoal overflow-hidden">
          {/* Browser header */}
          <div className="bg-brutal-charcoal dark:bg-brutal-ink px-4 py-3 flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-accent-coral" />
              <div className="w-3 h-3 rounded-full bg-accent-gold" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 bg-brutal-stone/20 rounded px-3 py-1 text-sm font-mono text-brutal-cream/70 text-center truncate">
              mumbisdev.github.io
            </div>
          </div>

          {/* Content area with recursive effect */}
          <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-brutal-cream to-brutal-paper dark:from-brutal-black dark:to-brutal-charcoal">
            {/* Animated gradient spotlight following mouse */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                background: isHovering
                  ? `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(0, 245, 255, 0.15) 0%, transparent 50%)`
                  : 'none',
              }}
              transition={{ duration: 0.1 }}
            />

            {/* Recursive nested frames */}
            <div className="absolute inset-8 border-2 border-accent-cyan/30 dark:border-accent-cyan/20">
              <div className="absolute inset-4 border-2 border-accent-cyan/20 dark:border-accent-cyan/10">
                <div className="absolute inset-4 border border-accent-cyan/10 dark:border-accent-cyan/5" />
              </div>
            </div>

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                className="mb-6"
              >
                <div className="w-20 h-20 border-4 border-accent-cyan flex items-center justify-center relative">
                  <Monitor className="w-10 h-10 text-accent-cyan" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute -inset-2 border-2 border-dashed border-accent-gold/50 rounded-full"
                  />
                </div>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-2xl font-display text-brutal-black dark:text-brutal-cream mb-2"
              >
                You&apos;re Already Here<span className="text-accent-cyan">.</span>
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-brutal-stone text-sm max-w-md font-mono"
              >
                This is the portfolio website. You&apos;re experiencing it in real-time.
              </motion.p>

              {/* Live timestamp */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-6 font-mono text-xs text-accent-cyan"
              >
                LIVE: {currentTime.toLocaleTimeString()}
              </motion.div>
            </div>

            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-accent-cyan" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-accent-cyan" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-accent-cyan" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-accent-cyan" />
          </div>
        </div>
      </motion.div>

      {/* Interactive feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            icon: Code2,
            title: 'Source Code',
            description: 'Built with modern web technologies',
            accent: 'accent-cyan',
          },
          {
            icon: Layers,
            title: 'Meta Design',
            description: 'Self-referential showcase',
            accent: 'accent-gold',
          },
          {
            icon: MousePointer2,
            title: 'Interactive',
            description: 'Explore the live experience',
            accent: 'accent-coral',
          },
        ].map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="group border-3 border-brutal-charcoal dark:border-brutal-ink bg-brutal-paper dark:bg-brutal-charcoal p-6 hover:border-accent-cyan transition-colors"
          >
            <feature.icon className={`w-8 h-8 text-${feature.accent} mb-3`} />
            <h4 className="font-display text-brutal-black dark:text-brutal-cream text-lg mb-1">
              {feature.title}
            </h4>
            <p className="text-brutal-stone text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Tech stack visualization */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="border-3 border-brutal-charcoal dark:border-brutal-ink bg-brutal-charcoal dark:bg-brutal-ink p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="w-5 h-5 text-accent-gold" />
          <span className="font-mono text-sm text-brutal-cream uppercase tracking-widest">
            Built With
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="px-4 py-2 border border-accent-cyan/50 text-accent-cyan font-mono text-sm
                         hover:bg-accent-cyan hover:text-brutal-black transition-colors cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

