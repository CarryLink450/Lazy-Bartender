/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        night: '#080913',
        navy: '#101629',
        citrus: '#ff8a1f',
        lime: '#9cff44',
        berry: '#ff3f9e',
        purple: '#7638ff',
        ice: '#7fe7ff',
        gold: '#f8c968',
      },
      boxShadow: {
        glow: '0 0 44px rgba(255, 63, 158, 0.24)',
        citrus: '0 18px 60px rgba(255, 138, 31, 0.25)',
      },
    },
  },
  plugins: [],
};
