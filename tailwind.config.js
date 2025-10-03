/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',               // ← add this
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        netflix: {
          bg: "#0b0b0f",
          card: "#141414",
          accent: "#e50914",
          glow: "#e50914",
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(229, 9, 20, 0.6)",
        soft: "0 10px 30px rgba(0,0,0,0.5)"
      },
      backgroundImage: {
        'cinema-gradient': "radial-gradient(1000px 400px at 10% -10%, rgba(229,9,20,0.2), transparent 40%), radial-gradient(800px 400px at 90% -10%, rgba(20,20,20,0.7), transparent 40%), radial-gradient(600px 300px at 50% 110%, rgba(229,9,20,0.15), transparent 50%)"
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      }
    },
  },
  plugins: [],
}
