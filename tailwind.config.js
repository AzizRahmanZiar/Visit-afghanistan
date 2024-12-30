/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xsm: '320px',
      ysm: '375px',
      sm: '425px',
      sm1: '554px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        freehand: ['Freehand'],
        freestyle: ['Freestyle Script'],
        fingerpaint: ['"Finger Paint"'],
        'custom-blue': '#0473A8',
      },
    },
  },
  plugins: [],
};
