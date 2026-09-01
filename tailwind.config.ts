import type { Config } from 'tailwindcss';
import type { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1f4b60',
          dark: '#0b222f',
          light: '#615AC7',
        },
        accent: {
          DEFAULT: '#C8872A',
          dark: '#A67020',
          light: '#E09A3A',
        },
        background: {
          DEFAULT: '#FAF7F2',
          dark: '#F0EBE3',
        },
        surface: '#FFFFFF',
        brand: {
          text: '#1C1410',
          muted: '#6B5A4A',
          subtle: '#9C8A7A',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['var(--font-roboto)', 'Roboto', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        '.pl-inherit': { 'padding-left': 'inherit' },
      })
    }
  ],
};

export default config;
