import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        // New design system colors
        surface: {
          DEFAULT: '#FAFAF9',
          alt: '#F5F5F4',
          dark: '#18181B',
          'dark-alt': '#27272A',
        },
        ink: {
          DEFAULT: '#18181B',
          secondary: '#52525B',
          tertiary: '#A1A1AA',
        },
        geometric: {
          orange: '#F97316',
          blue: '#3B82F6',
          violet: '#8B5CF6',
        },
      },
      fontFamily: {
        sans: ['Satoshi', 'var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['Clash Display', 'var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        display: ['Clash Display', 'var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        jp: ['Noto Sans JP', 'var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'display-xl': ['5rem', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-md': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '600' }],
        'display-sm': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      animation: {
        'fade': 'fadeInUp 1s both',
        'fade-in': 'fadeIn 0.6s ease-out both',
        'fade-up': 'fadeInUp 0.6s ease-out both',
        'fade-down': 'fadeInDown 0.6s ease-out both',
        'fade-left': 'fadeInLeft 0.6s ease-out both',
        'fade-right': 'fadeInRight 0.6s ease-out both',
        'scale-in': 'scaleIn 0.5s ease-out both',
        'slide-up': 'slideUp 0.5s ease-out both',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(1.5rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-1.5rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-1.5rem)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(1.5rem)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      transitionDelay: {
        '0': '0ms',
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'dot-pattern': 'radial-gradient(circle, currentColor 1px, transparent 1px)',
        'grid-pattern': 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-sm': '20px 20px',
        'dot-md': '30px 30px',
        'dot-lg': '40px 40px',
        'grid-sm': '20px 20px',
        'grid-md': '40px 40px',
      },
      boxShadow: {
        'elegant': '0 4px 20px -2px rgba(0, 0, 0, 0.08)',
        'elegant-lg': '0 10px 40px -4px rgba(0, 0, 0, 0.1)',
        'elegant-xl': '0 20px 60px -8px rgba(0, 0, 0, 0.12)',
        'inner-elegant': 'inset 0 2px 8px 0 rgba(0, 0, 0, 0.04)',
        'glow': '0 0 40px -8px var(--tw-shadow-color)',
        'glow-lg': '0 0 60px -12px var(--tw-shadow-color)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant, addUtilities }) => {
      addVariant('intersect', '&:not([no-intersect])');
      
      // Animation delay utilities
      addUtilities({
        '.animation-delay-100': { 'animation-delay': '100ms' },
        '.animation-delay-200': { 'animation-delay': '200ms' },
        '.animation-delay-300': { 'animation-delay': '300ms' },
        '.animation-delay-400': { 'animation-delay': '400ms' },
        '.animation-delay-500': { 'animation-delay': '500ms' },
        '.animation-delay-600': { 'animation-delay': '600ms' },
        '.animation-delay-700': { 'animation-delay': '700ms' },
        '.animation-delay-800': { 'animation-delay': '800ms' },
      });
    }),
  ],
  darkMode: 'class',
};
