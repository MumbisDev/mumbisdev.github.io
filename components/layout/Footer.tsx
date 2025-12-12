import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100 border-t border-neutral-200 mt-3xl">
      <div className="max-w-container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-black mb-4">
              Navigation
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-neutral-500 hover:text-black transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm text-neutral-500 hover:text-black transition-colors"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-sm text-neutral-500 hover:text-black transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-sm text-neutral-500 hover:text-black transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-black mb-4">
              Connect
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm text-neutral-500 hover:text-black transition-colors flex items-center gap-2"
              >
                <Mail size={16} />
                {personalInfo.email}
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-black mb-4">
              Social
            </h3>
            <div className="flex gap-4">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-accent-blue transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-accent-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personalInfo.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-accent-blue transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-200 text-center">
          <p className="text-sm text-neutral-500">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

