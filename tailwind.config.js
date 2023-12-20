/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      width: {
        22: "5.5rem"
      }
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      blackish: "#171717"
    }
  },
  plugins: [],
}