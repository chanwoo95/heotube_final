/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        videos_7: "repeat(7, minmax(150px, auto))",
        videos_6: "repeat(6, minmax(150px, auto))",
        videos_5: "repeat(5, minmax(150px, auto))",
        videos_4: "repeat(4, minmax(150px, auto))",
        videos_3: "repeat(3, minmax(150px, auto))",
        videos_2: "repeat(2, minmax(150px, auto))",
        videos_1: "repeat(1, 1fr)",
      },
    },
    screens: {
      desktop: {
        max: "1280px",
      },
      tablet: {
        max: "1144px",
      },
      mobile: {
        max: "768px",
      },
      mobile_md: {
        max: "1135px",
      },
      mobile_sm: {
        max: "650px",
      },
      mobile_2sm: {
        max: "400px",
      },
      xl_2: {
        max: "1510px",
      },
      sm: "640px",
      md: "768px",
      toggle: "920px",
      lg: "1144px",

      xl: "1280px",
    },
  },
};
