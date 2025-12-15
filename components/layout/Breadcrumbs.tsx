import React from 'react';
import Link from 'next/link';

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
      <ol className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-brutal-stone hover:text-accent-cyan transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={isLast ? 'text-brutal-cream' : 'text-brutal-stone'}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span className="text-accent-cyan">/</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
