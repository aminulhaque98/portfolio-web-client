/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        shadowOne: "10px 10px 19px #E7EBFD, -10px -10px 19px #F4DDFA",
      }
    },
  },
  plugins: [require("daisyui")],
}

