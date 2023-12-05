/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "almost-black": "hsl(280, 10%, 6%)",
        "purple-dark": "hsla(240, 30%, 28%, 0.25)",

        "skin-tone-darker": "hsl(274, 9%, 15%)",
        "skin-tone-dark": "hsl(327, 7%, 30%)",
        "skin-tone": "hsl(10, 10%, 51%)",
        "skin-tone-light": "hsl(6, 8%, 74%)",

        "four-star-card-light": "hsl(261, 94%, 76%)",
        "four-star-card-dark": "hsl(258, 40%, 54%)",

        "five-star-card-light": "hsl(40, 100%, 73%)",
        "five-star-card-dark": "hsl(41, 39%, 58%)",

        "orange-modified": "hsl(27, 98%, 54%)",
        "yellow-modified": "hsl(45, 100%, 51%)",

        "indigo-modified": "hsl(263, 90%, 51%)",
        "purple-modified": "hsl(261, 51%, 51%)",
      },

      fontFamily: {
        poppins: "Poppins",
        ephesis: "Ephesis",
        outfit: "Outfit",
        oswald: "Oswald",
      },

      screens: {
        xs: "374px",
      },
    },
  },
  plugins: [],
};
