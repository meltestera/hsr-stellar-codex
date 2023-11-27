/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "almost-black": "hsl(280, 10%, 6%)",
        "violet-dark": "hsl(270, 8%, 15%)",
        "skin-tone-dark": "hsl(327, 7%, 30%)",
        "skin-tone": "hsl(10, 10%, 51%)",
        "skin-tone-light": "hsl(6, 8%, 74%)",

        "orange-modified": "hsl(27, 98%, 54%)",
        "yellow-modified": "hsl(45, 100%, 51%)",

        "indigo-modified": "hsl(263, 90%, 51%)",
        "purple-modified": "hsl(261, 51%, 51%)",
      },
    },
  },
  plugins: [],
};
