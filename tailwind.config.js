/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow-200': '#ffd214',
        'blue-500': '#8498E3CC',
        'purple-500': '#8498E399',
        'grey-1': '#f0f6fc',
        'grey-2': '#f0f6fc',
        'blue-1': '#8498E3',
        'dark-blue-1': '#5F657A',

      },
      backgroundImage: {
        'custom-image': "url('./assets/background.jpg')",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },

    },
  },
  plugins: [],
}