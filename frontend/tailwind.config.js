/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#003049',
        secondaryRed: '#D62828',
        accentOrange: '#F77F00',
        statusBlue: '#2094F3',
        accentYellow: '#FCBF49',
        specialGrey: '#90A0B7',
        selectedBlue: '#184760',
      },
    },
  },
  plugins: [],
};
