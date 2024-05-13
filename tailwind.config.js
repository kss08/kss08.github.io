/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    {
      pattern: /w-(4|5|7|10)/,
      variants: ['sm', 'md'],
    },
    {
      pattern: /bg-(gray|blue|indigo|purple|violet|fuchsia|pink)-(100|200|300|400|500|600|700|800|900)/,
      variants: ['hover', 'focus'],
    },
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    'gatsby-plugin-postcss',
  ],
}