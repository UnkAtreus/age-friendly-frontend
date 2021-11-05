module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    fontFamily: {
      display: ["Prompt"],
      body: ["Prompt"],
    },
    extend: {
      colors: {
        primary: {
          400: "#704D4D",
          300: "#BD4A4A",
          200: "#F05D5D",
          100: "#F2A7A7",
        },
        grayscale: {
          500: "303031",
          400: "#59595A",
          300: "#838383",
          200: "#ACACAD",
          100: "#F3F3F3",
        },
        error: {
          200: "#FF2B2B",
          100: "#FF5555",
        },
        success: {
          200: "#5DEFB2",
          100: "#7DF2C1",
        },
      },
      width: {
        "545px": "545px",
      },
      height: {
        "372px": "372px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
