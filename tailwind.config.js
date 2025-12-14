/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'retro-blue': '#000080',
        'retro-green': '#00ff00',
        'retro-cyan': '#00ffff',
        'retro-yellow': '#ffff00',
        'retro-magenta': '#ff00ff',
        'retro-orange': '#ffcc00',
      },
      fontFamily: {
        'mono': ['Courier New', 'monospace'],
      },
      animation: {
        'blink': 'blink 1s steps(2, start) infinite',
      },
      keyframes: {
        blink: {
          'to': { visibility: 'hidden' },
        }
      }
    },
  },
  plugins: [],
}

