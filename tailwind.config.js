/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      opacity: {
        "7": "0.07"
      },
      fontFamily: {
        "bricolage.grotesque": ["Bricolage Grotesque"],
        "work.sans": ["Work Sans"]
      }
    },
    colors: {
      "dark.gray": "#181818",
      "white": "#ffffff",
    }
  },
  plugins: [],
}