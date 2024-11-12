/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      fontSize: {
        ...Object.fromEntries(
          Object.entries(defaultTheme.fontSize).map(([key, value]) => {
            const [fontSize, options] = Array.isArray(value) ? value : [value];
            const scaledSize = parseFloat(fontSize) * 0.9 + 'rem';
            return [key, [scaledSize, options]];
          })
        ),
      },
    },
  },
  plugins: [],
}
