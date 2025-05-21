/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1a1a',
          light: '#262626',
          darker: '#121212'
        },
        accent: {
          DEFAULT: '#00ff88',
        },
        text: {
          DEFAULT: '#ffffff',
          secondary: '#e0e0e0'
        }
      },
      fontFamily: {
        mono: ['"Roboto Mono"', 'monospace']
      },
      fontSize: {
        'h1': '48px',
        'h2': '36px',
        'body': '16px',
      },
      backgroundColor: {
        'button-hover': 'rgba(0, 255, 136, 0.2)'
      }
    },
  },
  plugins: [],
};