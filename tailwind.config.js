/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: () => ({
        slate: {
          css: {
            '--tw-prose-headings': 'var(--color-slate-600)',
          },
        },
      }),
    },
  },
}
