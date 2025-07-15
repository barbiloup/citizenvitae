/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette pastel inspiree scout
        primary: {
          50: '#f6f8f4',
          100: '#e8f0e1',
          200: '#d4e2c7',
          300: '#b8cfa3',
          400: '#9caf88', // Vert sauge principal
          500: '#7d9268',
          600: '#647551',
          700: '#4f5c42',
          800: '#3d4633',
          900: '#2d3327',
        },
        secondary: {
          50: '#fefcf8',
          100: '#fdf7ed',
          200: '#f9edd5',
          300: '#f5e6d3', // Beige sable
          400: '#e6d0a8',
          500: '#d4a574', // Terre de sienne
          600: '#c08c4a',
          700: '#a67239',
          800: '#8a5f30',
          900: '#6b4a26',
        },
        accent: {
          50: '#f7fbfd',
          100: '#ecf4f9',
          200: '#d9e8f2',
          300: '#b8d4e3', // Bleu ciel pastel
          400: '#8fb8d1',
          500: '#6b9bc2',
          600: '#5480a8',
          700: '#456889',
          800: '#395570',
          900: '#2d4459',
        },
        success: {
          50: '#f4f7f2',
          100: '#e6ede1',
          200: '#cfdcc6',
          300: '#a8c294',
          400: '#85a76b',
          500: '#6b8c52',
          600: '#547040',
          700: '#435834',
          800: '#36462b',
          900: '#2a3521',
        },
        warm: {
          50: '#fefcf8',
          100: '#fdf8f0',
          200: '#faf0e1',
          300: '#f5e6d3',
          400: '#edd5b8',
          500: '#e0c49a',
          600: '#d0b07d',
          700: '#b8965f',
          800: '#9a7d4f',
          900: '#7a6340',
        }
      }
    },
  },
  plugins: [],
}