/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
    fontSize: {
      bannerTitle: `100px`,
      heading1: `48px`,
      heading2: `36px`,
      heading3: `24px`,
      heading4: `18px`,
      body: `16px`,
      largeCaption: `14px`,
    },
    fontWeight: {
      regular: 400,
      semibold: 600,
      bold: 800
    },
    extend: {
      colors: {
        mainYellow: '#FFDE5C',
        mainavy: '#00488D'
      }
    },
  },
  plugins: [],
}