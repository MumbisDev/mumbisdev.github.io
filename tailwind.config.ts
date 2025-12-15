import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        // Japanese Post-Modern Brutalist Palette
        brutal: {
          black: '#0A0A0A',
          charcoal: '#1A1A1A',
          ink: '#2D2D2D',
          cream: '#F5F0E6',
          paper: '#E8E2D4',
          stone: '#A8A095',
        },
        accent: {
          cyan: '#00E5CC', // electric cyan/teal
          gold: '#C9A227', // gold
          rust: '#B85C38', // rust
          indigo: '#3D5A80', // indigo blue
        },
        semantic: {
          error: '#E53935',
          success: '#3D7C47',
          warning: '#C9A227',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.1em' }],
        'sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.05em' }],
        'base': ['1rem', { lineHeight: '1.7', letterSpacing: '0.02em' }],
        'lg': ['1.125rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'xl': ['1.25rem', { lineHeight: '1.4', letterSpacing: '0.02em' }],
        '2xl': ['1.5rem', { lineHeight: '1.3', letterSpacing: '0.02em' }],
        '3xl': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        '4xl': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '5xl': ['3.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '6xl': ['4.5rem', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        '7xl': ['6rem', { lineHeight: '0.9', letterSpacing: '-0.03em' }],
        '8xl': ['8rem', { lineHeight: '0.85', letterSpacing: '-0.04em' }],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
        '5xl': '128px',
      },
      maxWidth: {
        'container': '1440px',
        'content': '800px',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
      },
      transitionTimingFunction: {
        'brutal': 'cubic-bezier(0.2, 0, 0, 1)',
        'standard': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      boxShadow: {
        'brutal': '4px 4px 0 0 #0A0A0A',
        'brutal-sm': '2px 2px 0 0 #0A0A0A',
        'brutal-lg': '8px 8px 0 0 #0A0A0A',
        'brutal-cyan': '4px 4px 0 0 #00E5CC',
        'brutal-gold': '4px 4px 0 0 #C9A227',
        'brutal-cream': '4px 4px 0 0 #F5F0E6',
      },
      animation: {
        'grain': 'grain 8s steps(10) infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.2, 0, 0, 1) forwards',
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.2, 0, 0, 1) forwards',
      },
      keyframes: {
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
