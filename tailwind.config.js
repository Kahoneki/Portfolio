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

            //Make content width larger
            maxWidth: '80vw',

            //Wrap texts
            p: {
              overflowWrap: 'break-word',
            },

            //Adjust margins
            h2: {
              marginBottom: '0.5rem !important',
            },
            'h2 + p': {
              marginTop: '0px !important',
            },
            'img': {
              marginTop: '1rem !important',
              marginBottom: '1rem !important',
            },
            'p:has(+ ul)': {
              marginBottom: '0 !important',
            },
            'p + ul': {
              marginTop: '0 !important',
            },
            'li': {
              marginTop: '0 !important',
              marginBottom: '0 !important',
            },

            //Change scroll margin for headers
            'h1, h2, h3, h4, h5, h6': {
              scrollMarginTop: '6rem !important',
              'font-weight': 'bold',
            },
          }
        }
      })
    },
  },

  plugins: [
    typography,
  ],
};