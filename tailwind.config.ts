import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "index-top": "url(/images/indextop.png)",
        "index-bottom": "url(/images/indexbottom.png)",
        "sign-bg": "url(/images/sign-bg.png)",
      },
      fontFamily: {
        switzer: "Switzer",
      },
      colors: {
        "RED-INFERNO": "#BF2018",
        MAGNET: "#515055",
        "PARTRIDGE-GREY": "#8F9198",
        "COAL-MINE": "#54565B",
        "GATEWAY-GREY": "#9FA19C",
        "HIGHWAY-TO-HELL": "#C81107",
      },
      screens: {
        lg: "1030",
      },
    },
  },
  plugins: [],
};
export default config;
