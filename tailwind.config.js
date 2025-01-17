/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        "custom-gray": "hsl(0, 0%, 41%)"
      }
    },
  },
  plugins: [],
}

