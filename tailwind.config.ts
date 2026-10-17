import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        burgundy: '#4A0E1C',
        ivory: '#FDFBF7',
        gold: '#C5A059',
        espresso: '#2C1E16',
        charcoal: '#333333',
      },
      fontFamily: {
        sans: ['var(--font-plex)'],
        heading: ['var(--font-alexandria)'],
      }
    },
  },
  plugins: [],
}
export default config