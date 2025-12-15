import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="bg-brutal-black min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border-4 border-accent-cyan/10 rotate-45" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border-4 border-accent-gold/10 rounded-full" />
      </div>

      <div className="container-brutal text-center relative z-10">
        {/* 404 Display */}
        <div className="relative mb-8">
          <span className="font-display text-[12rem] md:text-[16rem] text-brutal-ink leading-none">
            404
          </span>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[12rem] md:text-[16rem] text-stroke text-accent-cyan leading-none">
            404
          </span>
        </div>
        <h1 className="text-4xl text-brutal-cream mb-4">Page Not Found</h1>
        <p className="text-brutal-stone text-lg mb-12 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        
        <Link href="/">
          <Button variant="primary">Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
