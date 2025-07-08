/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scrollX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%': { opacity: '0.75' },
          '25%': { opacity: '0.5' },
          '50%': { opacity: '0.25' },
          '75%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'scroll-x': 'scrollX 20s linear infinite',
        blink: 'blink 2s infinite ease-in-out',
      },
      fontFamily: {
        sans: ['Jost', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
