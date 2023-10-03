/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile': "url('/src/images/bg-sidebar-mobile.svg')",
        'desktop': "url('/src/images/bg-sidebar-desktop.svg')",
      }
    },
  },
  plugins: [],
}

