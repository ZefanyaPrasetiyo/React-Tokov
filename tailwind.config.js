// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom warna kamu
        primary: '',
        secondary: '#3C8BFF',
        tokov: {
          light: '#5CA9FF',
          DEFAULT: '#246BFD',
          dark: '#1a4dcc'
        },
      },
    },
  },
  plugins: [],
}
