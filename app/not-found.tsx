import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="py-3xl">
      <div className="max-w-container mx-auto px-6 text-center">
        <h1 className="mb-4">404</h1>
        <p className="text-body text-neutral-500 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link href="/">
          <Button variant="primary">Return Home</Button>
        </Link>
      </div>
    </div>
  );
}

