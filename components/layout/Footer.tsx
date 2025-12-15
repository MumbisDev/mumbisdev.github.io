import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, X, Mail } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brutal-paper dark:bg-brutal-charcoal border-t-4 border-accent-cyan">
      <div className="container-brutal py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-display text-4xl text-brutal-black dark:text-brutal-cream">
                Z.O.C<span className="text-accent-cyan">.</span>
              </span>
            </Link>
            <p className="text-brutal-stone text-sm max-w-sm mb-6">
              Full stack developer crafting digital experiences with raw authenticity and precise craftsmanship.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-brutal-charcoal dark:border-brutal-ink flex items-center justify-center text-brutal-black dark:text-brutal-cream hover:border-accent-cyan hover:text-accent-cyan transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-brutal-charcoal dark:border-brutal-ink flex items-center justify-center text-brutal-black dark:text-brutal-cream hover:border-accent-gold hover:text-accent-gold transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personalInfo.socialLinks.x}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-brutal-charcoal dark:border-brutal-ink flex items-center justify-center text-brutal-black dark:text-brutal-cream hover:border-accent-cyan hover:text-accent-cyan transition-all duration-200"
                aria-label="X"
              >
                <X size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-lg text-brutal-black dark:text-brutal-cream mb-6 tracking-wider">
              Navigation
            </h3>
            <nav className="flex flex-col gap-3">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-brutal-stone hover:text-accent-cyan transition-colors text-sm hover-underline inline-block"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg text-brutal-black dark:text-brutal-cream mb-6 tracking-wider">
              Contact
            </h3>
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-brutal-stone hover:text-accent-cyan transition-colors text-sm"
              >
                <Mail size={16} />
                {personalInfo.email}
              </a>
              <p className="text-brutal-stone text-sm">
                {personalInfo.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-brutal-stone/30 dark:border-brutal-ink flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brutal-stone text-xs font-mono">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-accent-cyan" />
            <div className="w-2 h-2 border border-accent-gold" />
            <div className="w-2 h-2 bg-brutal-black dark:bg-brutal-cream" />
          </div>
        </div>
      </div>
    </footer>
  );
};
