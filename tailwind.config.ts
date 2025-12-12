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
        primary: {
          black: '#000000',
          white: '#FFFFFF',
        },
        neutral: {
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
        },
        accent: {
          blue: '#4A90E2',
          lightBlue: '#A8D8F0',
          coral: '#FF6B6B',
          yellow: '#F4D03F',
        },
        semantic: {
          error: '#DC2626',
          success: '#16A34A',
          warning: '#EAB308',
        },
      },
      fontFamily: {
        primary: ["system-ui", "-apple-system", "'Segoe UI'", "Roboto", "sans-serif"],
        secondary: ["system-ui", "-apple-system", "'Segoe UI'", "Roboto", "sans-serif"],
      },
      fontSize: {
        'caption': ['11px', { lineHeight: '1.5', letterSpacing: '0.05em' }],
        'body': ['14px', { lineHeight: '1.6', letterSpacing: '0.02em' }],
        'h3': ['24px', { lineHeight: '1.4', letterSpacing: '0.05em' }],
        'h2': ['32px', { lineHeight: '1.3', letterSpacing: '0.08em' }],
        'h1': ['48px', { lineHeight: '1.2', letterSpacing: '0.1em' }],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
      maxWidth: {
        'container': '1440px',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
      },
      transitionTimingFunction: {
        'standard': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        'decelerate': 'cubic-bezier(0.0, 0.0, 0.2, 1)',
        'accelerate': 'cubic-bezier(0.4, 0.0, 1, 1)',
      },
    },
  },
  plugins: [],
}
export default config

