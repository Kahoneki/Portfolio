/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        background: '#FDEEF5',
        sidebar: '#FFAFBC',
        text: '#59002A',
        linkHover: '#FFD6DD',
        thumbnailHoverDescription: '#FDEEF5',
        contentSeparator: '#FF5D77',
        inlineCodeBackground: '#1F2937', //Matches background colour for highlightjs code blocks
        date: "#AB0252", //colors.text but lighter
      },

      typography: ({ theme }) => ({
        'blog-theme': {
          css: {
            '--tw-prose-body': theme('colors.text'),
            '--tw-prose-headings': theme('colors.text'),
            '--tw-prose-links': theme('colors.sidebar'),
            strong: { color: theme('colors.text'), },

            //Remove backticks on code blocks
            'code::before': {content: '""'},
            'code::after': {content: '""'},
          }
        }
      })
    },
  },

  plugins: [
    typography,
  ],
};