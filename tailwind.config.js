/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        background: '#FDEEF5',
        sidebar: '#FFAFBC',
        text: '#59002A',
        linkHover: '#FFD6DD',
        contentSeparator: '#FF5D77'
      },
    },
  },
  plugins: [],
}

