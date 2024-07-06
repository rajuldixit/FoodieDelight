// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      padding: {
        xxl: "4rem"
      }
    }
  },
  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "dark",
      layout: {
        disabledOpacity: "0.3", // opacity-[0.3]
        radius: {
          small: "2px", // rounded-small
          medium: "4px", // rounded-medium
          large: "6px" // rounded-large
        },
        borderWidth: {
          small: "1px", // border-small
          medium: "1.5px", // border-medium
          large: "2px" // border-large
        },
        paddingRight: {
          8: "4rem"
        }
      },
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#ff2dce",
              foreground: "#ffffff"
            },

            focus: "#ff2dce"
          },
          layout: {
            radius: {
              small: "12px", // rounded-small
              medium: "14px", // rounded-medium
              large: "16px" // rounded-large
            }
          }
        },
        "light-theme": {
          colors: {
            primary: {
              DEFAULT: "#BEF264",
              foreground: "#000000"
            },
            focus: "#BEF264"
          },
          layout: {
            radius: {
              small: "12px", // rounded-small
              medium: "14px", // rounded-medium
              large: "16px" // rounded-large
            }
          }
        },
        "app-theme": {
          extend: "dark",
          colors: {
            primary: {
              100: "#F6D4FE",
              200: "#E8AAFE",
              300: "#D580FC",
              400: "#C160FA",
              500: "#A12CF8",
              600: "#7D20D5",
              700: "#5E16B2",
              800: "#420E8F",
              900: "#2E0877",
              DEFAULT: "#A12CF8",
              foreground: "#ffffff"
            },

            secondary: {
              100: "#EFFBD1",
              200: "#DBF8A4",
              300: "#BCEA73",
              400: "#9AD54E",
              500: "#6EBA1D",
              600: "#569F15",
              700: "#40850E",
              800: "#2D6B09",
              900: "#205905",
              DEFAULT: "#6EBA1D",
              foreground: "#ffffff"
            }
          },
          layout: {
            radius: {
              small: "12px", // rounded-small
              medium: "14px", // rounded-medium
              large: "16px" // rounded-large
            },
            borderWidth: {
              small: "1px", // border-small
              medium: "1.5px", // border-medium
              large: "2px" // border-large
            }
          }
        }
      }
    })
  ]
};

//https://colors.eva.design/
