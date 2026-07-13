/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        navy: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d7fe',
          300: '#a5b9fc',
          400: '#8190f8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#1e2563',
          900: '#0f172a',
          950: '#060b18',
        },
        cyan: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-up': 'slideUp 0.6s ease forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(59, 130, 246, 0.8), 0 0 100px rgba(6, 182, 212, 0.4)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #060b18 0%, #0f172a 40%, #0c1f3f 70%, #060b18 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        'blue-glow': 'radial-gradient(ellipse at center, rgba(59,130,246,0.15) 0%, transparent 70%)',
        'cyan-glow': 'radial-gradient(ellipse at center, rgba(6,182,212,0.1) 0%, transparent 70%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
        'card-hover': '0 20px 60px rgba(59, 130, 246, 0.2), 0 0 0 1px rgba(59, 130, 246, 0.1)',
        'blue-glow': '0 0 40px rgba(59, 130, 246, 0.4)',
        'cyan-glow': '0 0 40px rgba(6, 182, 212, 0.4)',
        'premium': '0 25px 80px rgba(0,0,0,0.5)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
