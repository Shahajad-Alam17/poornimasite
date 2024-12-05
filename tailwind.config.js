/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      secondary: "Lato",
    },
    container: {
      padding: {
        DEFAULT: "10px",
        // lg: '0',
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {
      colors: {
        body: "#e5e5e5",
        dark: "#0a0909",
        grey: {
          DEFAULT: "#0000",
          100: "#e4e4e3",
        },
        accent: {
          DEFAULT: "#1C1B1A ",
          hover: "#5a5a5a  ",
        },
      },
      backgroundImage: {
        pattern: "url('assets/img/body-bg-pattern.png')",
        hero: "url('assets/img/hero/bg.png')",
        menu: "url('assets/img/menu/bg.png')",
        testimonial: "url('assets/img/testimonial/bg.png')",
        newsletter: "url('assets/img/newsletter/bg.png')",
        footer: "url('assets/img/footer/bg.png')",
      },
    },
  },
  plugins: [],
};
