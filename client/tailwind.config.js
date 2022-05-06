module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        xl: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      },
      minHeight: {
        xl: "29.5rem",
      },
      maxWidth: {
        xl: "25.1rem",
      },
      borderWidth: {
        1: "1px",
      },
    },
    colors: {
      blue: "#2f80ed",
      white: "#ffffff",
      gray: "#828282",
      green: "#219653",
      "light-grayish-blue": "#fafafb",
      "light-gray": "#bdbdbd",
      "dark-gray": "#4f4f4f",
      "grayish-blue": "#f6f8fb",
      "pale-blue-border": "#97bef4",
      "dark-gray-border": "#e0e0e0",
      "gray-progress-bar": "#f2f2f2",
    },
    fontFamily: {
      poppins: ["Poppins, sans-serif"],
    },
  },
  plugins: [],
};
