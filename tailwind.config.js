export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'heading',
    'subheading',
    'btn-primary',
    'section-padding',
    'nav-link',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A192F",
        secondary: "#64FFDA",
        tertiary: "#112240",
        textPrimary: "#CCD6F6",
        textSecondary: "#8892B0",
      },
      fontFamily: {
        primary: ["Fira Code", "monospace"],
        secondary: ["Calibre", "sans-serif"],
      },
    },
  },
  plugins: [],
}
