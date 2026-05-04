/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
    safelist: [
      'translate-y-0',
      'translate-y-20',
      'opacity-0',
      'opacity-100',
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };