/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
      },
    },
    container: {
      center: true,
    }
  },
  plugins: [
    "postcss-import",
    "tailwindcss/postcss",
  ],
}

