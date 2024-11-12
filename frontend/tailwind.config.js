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
            // Reduce font size by 30% (multiply by 0.7)
            const scaledSize = parseFloat(fontSize) * 0.7 + 'rem';
            return [key, [scaledSize, options]];
          })
        ),
      },
    },
  },
  plugins: [],
}
