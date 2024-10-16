/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('../src/logo.svg')",
      },
      backgroundSize: {
        '1/2': '50%',
      },
      boxShadow: {
        'vs': '0 0 8px 0.5px #f1f5f9'
      },
    },
  },
  plugins: [],
}

