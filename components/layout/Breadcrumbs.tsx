import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="py-4" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-caption uppercase tracking-wider">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-neutral-500 hover:text-black transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={isLast ? 'text-black font-medium' : 'text-neutral-500'}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <ChevronRight size={12} className="text-neutral-300" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

