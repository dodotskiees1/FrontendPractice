/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "elevation-1": "0 4px 45px 0 rgba(9, 18, 39, 0.05)",
        "elevation-2": "0 4px 60px 0 rgba(9, 18, 39, 0.10)",
        "elevation-3": "0 0 25px rgba(0, 0, 0, 0.12)",
    },
    colors: {
        // Neutral Colors
        nt: {
            white: "#FFFFFF",
            50: "#F9FAFF",
            100: "#F2F3F7",
            150: "#E7E9F2",
            200: "#D8DEE7",
            250: "#C6CBD9",
            300: "#A9ACBA",
            400: "#9497A3",
            500: "#757784",
            700: "#3B3D44",
            900: "#1E1F24",
        },
        // Primary Colors
        pm: {
            50: "#E6EDFF",
            
            300: "#2C68FF",
            500: "#0046FA",
            600: "#5E3BEE",
            700: "#0034BA",
        },
        // Secondary Colors
        sd: {
            50: "#FFEED6",
            500: "#FF8310",
        },
        // System Colors
        sys: {
            rd50: "#FFF1F6",
            rd600: "#FA1D6D",
            bl50: "#EAF6FF",
            bl600: "#1091EE",
            gr50: "#F0FAF6",
            gr600: "#13A757",
            pr50: "#F8F4FF",
            pr600: "#722DFC",
        },
    },
    fontFamily: {
        sans: ["DM Sans", "sans-serif"],
    },
    fontSize: {
        h1: ["48px", { lineHeight: "50px", fontWeight: "500" }],
        h2: ["34px", { lineHeight: "42px", fontWeight: "500" }],
        h3: ["26px", { lineHeight: "34px", fontWeight: "500" }],
        h4: ["20px", { lineHeight: "28px", fontWeight: "500" }],
        h5: ["18px", { lineHeight: "26px", fontWeight: "500" }],
        h6: ["16px", { lineHeight: "24px", fontWeight: "500" }],
        "body-big-reg": ["18px", { lineHeight: "26px", fontWeight: "400" }],
        "body-big-str": ["18px", { lineHeight: "26px", fontWeight: "500" }],

        "body-base-reg": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-base-str": ["16px", { lineHeight: "24px", fontWeight: "500" }],

        "body-small-reg": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "body-small-str": ["14px", { lineHeight: "20px", fontWeight: "500" }],

        "caption-reg": ["12px", { lineHeight: "auto", fontWeight: "500" }],
        "caption-str": ["12px", { lineHeight: "auto", fontWeight: "700" }],
        "caption-all-caps": ["9px", { lineHeight: "auto", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase" }],
    },
      

    },
  },
  plugins: [],
}

