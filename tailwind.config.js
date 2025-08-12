/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // New color palette provided by user
        primary: {
          50: '#f0f2f3',
          100: '#e1e5e8',
          200: '#c3ccd1',
          300: '#a5b3ba',
          400: '#879aa3',
          500: '#5e8d83',
          600: '#4a7168',
          700: '#36554e',
          800: '#114538',
          900: '#0f444c',
          950: '#161d23',
        },
        secondary: {
          50: '#f0f2f3',
          100: '#e1e5e8',
          200: '#c3ccd1',
          300: '#a5b3ba',
          400: '#879aa3',
          500: '#5e8d83',
          600: '#4a7168',
          700: '#36554e',
          800: '#114538',
          900: '#0f444c',
          950: '#161d23',
        },
        accent: {
          50: '#f0f2f3',
          100: '#e1e5e8',
          200: '#c3ccd1',
          300: '#a5b3ba',
          400: '#879aa3',
          500: '#5e8d83',
          600: '#4a7168',
          700: '#36554e',
          800: '#114538',
          900: '#0f444c',
          950: '#161d23',
        },
        // Additional color variations for flexibility
        dark: {
          50: '#f0f2f3',
          100: '#e1e5e8',
          200: '#c3ccd1',
          300: '#a5b3ba',
          400: '#879aa3',
          500: '#5e8d83',
          600: '#4a7168',
          700: '#36554e',
          800: '#114538',
          900: '#0f444c',
          950: '#161d23',
        },
        light: {
          50: '#f0f2f3',
          100: '#e1e5e8',
          200: '#c3ccd1',
          300: '#a5b3ba',
          400: '#879aa3',
          500: '#5e8d83',
          600: '#4a7168',
          700: '#36554e',
          800: '#114538',
          900: '#0f444c',
          950: '#161d23',
        }
      },
      fontFamily: {
        // Single font for the entire website - Major Mono Display
        sans: ['Major Mono Display', 'monospace'],
        serif: ['Major Mono Display', 'monospace'],
        mono: ['Major Mono Display', 'monospace'],
        // Legacy support - all point to the same font
        luxury: ['Major Mono Display', 'monospace'],
        elegant: ['Major Mono Display', 'monospace'],
        classic: ['Major Mono Display', 'monospace'],
        display: ['Major Mono Display', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'scroll': 'scroll 20s linear infinite',
        // Custom sophisticated texture animations
        'grid-move': 'grid-move 20s linear infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'float-medium': 'float-medium 4s ease-in-out infinite',
        'float-fast': 'float-fast 3s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'pulse-medium': 'pulse-medium 3s ease-in-out infinite',
        'pulse-fast': 'pulse-fast 2s ease-in-out infinite',
        'line-glow': 'line-glow 3s ease-in-out infinite',
        'line-glow-delayed': 'line-glow-delayed 3s ease-in-out infinite 1.5s',
        'blob-slow': 'blob-slow 8s ease-in-out infinite',
        'blob-medium': 'blob-medium 6s ease-in-out infinite',
        'blob-fast': 'blob-fast 4s ease-in-out infinite',
        // Hero animation classes
        'wave-slow': 'wave-slow 6s ease-in-out infinite',
        'wave-medium': 'wave-medium 4s ease-in-out infinite',
        'wave-fast': 'wave-fast 3s ease-in-out infinite',
        'light-ray': 'light-ray 4s ease-in-out infinite',
        'light-ray-delayed': 'light-ray-delayed 4s ease-in-out infinite 2s',
        'orbit-slow': 'orbit-slow 20s linear infinite',
        'orbit-medium': 'orbit-medium 15s linear infinite',
        'orbit-fast': 'orbit-fast 10s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        // Custom sophisticated texture animation keyframes
        'grid-move': {
          '0%': { transform: 'translate(0px, 0px)' },
          '100%': { transform: 'translate(60px, 60px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        'float-medium': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(90deg)' },
        },
        'float-fast': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(45deg)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.2)' },
        },
        'pulse-medium': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.1)' },
        },
        'pulse-fast': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.3)' },
        },
        'line-glow': {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.4' },
        },
        'line-glow-delayed': {
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '0.35' },
        },
        'blob-slow': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        'blob-medium': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(-30px, -30px) scale(1.1)' },
          '66%': { transform: 'translate(20px, 20px) scale(0.9)' },
        },
        'blob-fast': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(20px, -20px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        // Hero animation keyframes
        'wave-slow': {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(-20px)' },
        },
        'wave-medium': {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(15px)' },
          },
        'wave-fast': {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(-10px)' },
        },
        'light-ray': {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.6' },
        },
        'light-ray-delayed': {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.6' },
        },
        'orbit-slow': {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
        'orbit-medium': {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(-360deg)' },
        },
        'orbit-fast': {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
} 