/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'signup-img': "url('/images/pang-yuhao-_kd5cxwZOK4-unsplash.jpg')",
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/typography'),],
}

