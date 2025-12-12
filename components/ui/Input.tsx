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
        <label className="block text-xs font-normal uppercase tracking-wider text-black mb-2">
          {label}
        </label>
      )}
      <input
        className={`w-full bg-white border ${
          error ? 'border-semantic-error' : 'border-neutral-300'
        } px-4 py-3 text-sm text-black placeholder-neutral-400 focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:ring-opacity-10 ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-xs text-semantic-error">{error}</p>
      )}
    </div>
  );
};

