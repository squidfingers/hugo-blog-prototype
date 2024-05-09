/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["assets/**/*.js", "content/**/*.md", "layouts/**/*.html"],
  theme: {
    fontFamily: {
      'sans': ['Inter Tight', 'ui-sans-serif', 'Helvetica', 'Arial', 'sans-serif'],
      'mono': ['ui-monospace', 'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace'],
    },
    extend: {
      typography: ({ theme }) => ({
        slate: {
          css: {
            '--tw-prose-headings': theme('colors.slate[600]'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
