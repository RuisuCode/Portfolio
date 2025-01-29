/** @type {import('tailwindcss').Config} */
// "./src/components/**/*.{astro,tsx,jsx,ts,js}",
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flyonui/dist/js/*.js",
  ],
  theme: {
    extend: {
      screens: {
        xs: "0px",
        sm: "640px",
        md: "768px",
        lg: "1280px",
        xl: "1500px",
        "2xl": "1536px",
      },
      invert: {
        22: ".22",
        50: ".5",
        75: ".75",
      },
      dropShadow: {
        "01xl": "0 25px 25px rgba(205, 175, 216, 1)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  darkMode: ["selector"],
  plugins: [require("flyonui"), require("flyonui/plugin")],
  flyonui: {
    themes: [
      {
        theme: {
          ...require("flyonui/src/theming/themes")["dark"],
          primary: "#f0eaf3",
          secondary: "#6c3082",
          accent: "#5A189A",
          neutral: "#f0eaf3",
          contrast: "#190031",
          contain: "#190031",
          "primary-dark": "#f0eaf3",
          "base-100": "#10002B",
          "base-200": "#89599B",
          "base-300": "#240046",
          "--primary-content": "#f00",
        },
      },
      {
        light: {
          ...require("flyonui/src/theming/themes")["light"],
          primary: "blue",
          secondary: "teal",
        },
      },
    ],
    // darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include FlyonUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    vendors: false, // default is false when true add customize css for apexChart, editor.js, flatpickr, fullcalendar, notyf, raty-js
    logs: true, // Shows info about FlyonUI version and used config in the console when building your CSS
    themeRoot: ":root",
  },
};
