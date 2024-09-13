/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gun-gray':'#D7D7D7',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(#D7D7D7,#99f6e4,#5eead4,#2dd4bf,#14b8a6,#0d9488,#0f766e,#115e59,#134e4a,#042f2e )',
      },
    },
  },
  plugins: [],
}

