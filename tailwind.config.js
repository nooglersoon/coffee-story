/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./core/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
    fontSize: {
      bannerTitle: `90px`,
      heading1: `48px`,
      heading2: `36px`,
      heading3: `24px`,
      heading4: `18px`,
      body: `16px`,
      largeCaption: `14px`,
      small: `12px`
    },
    fontWeight: {
      regular: 400,
      semibold: 600,
      bold: 800
    },
    extend: {
      colors: {
        mainYellow: '#FFDE5C',
        mainNavy: '#00488D'
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}