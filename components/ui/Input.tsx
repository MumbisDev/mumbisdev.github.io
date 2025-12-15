'use client';

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block font-mono text-xs uppercase tracking-widest text-brutal-stone mb-2">
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-4 py-4
          bg-brutal-ink border-3 border-brutal-ink
          text-brutal-cream font-body
          placeholder:text-brutal-stone
          focus:outline-none focus:border-accent-cyan
          transition-colors duration-200
          ${error ? 'border-semantic-error' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-2 text-xs text-semantic-error font-mono">{error}</p>
      )}
    </div>
  );
};
