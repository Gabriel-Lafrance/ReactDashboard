const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    fontSize: {
      'xs': ['16px','16px'],
      sm : ['20px','20px'],
      base: ['28px','28px'],
      lg: ['36px','36px'],
      xl : ['44px','44px'],
      '2xl': ['52px','52px'],
      '3xl': ['60px','60px'],
      '4xl': ['68px','68px'],
    },
    screens: {
      'xs': '535px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'primary': '#e5e7eb',
        'secondary': '#FFFFFF',
        'action': '#0ea5e9',
        'action-light': '#a5f3fc',
        'dark' : '#171717',
        'dark-light' : '#404040', 
      },
      keyframes :{
        dropDown : {
          '0%' : {	opacity: '0', transform: 'translateY(-100%)'},
          '100%' : { opacity: '1', transform: 'translateY(0)'},
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        slideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
        'drop-down' : 'dropDown 0.7s ease 0s 1 normal forwards',
        'fadeIn': "fadeIn 2s ease-in forwards",
        'slideDown': 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        'slideUp': 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      }
    },
  },
  plugins: [
  ],
};
