/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ben10-green': '#00ff00',
        'ben10-dark': '#0a0a0a',
        'omnitrix-green': '#00ff00',
        'omnitrix-dark': '#1a1a1a',
        'alien-purple': '#8b00ff',
        'alien-blue': '#00d4ff',
        'alien-red': '#ff0040',
        'alien-yellow': '#ffd700',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'space': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'pulse-green': 'pulseGreen 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        pulseGreen: {
          '0%, 100%': { 
            opacity: '1',
            boxShadow: '0 0 20px rgba(0, 255, 0, 0.5)'
          },
          '50%': { 
            opacity: '.8',
            boxShadow: '0 0 40px rgba(0, 255, 0, 0.8)'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(0, 255, 0, 0.5), 0 0 10px rgba(0, 255, 0, 0.3)'
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(0, 255, 0, 0.8), 0 0 30px rgba(0, 255, 0, 0.5)'
          },
        }
      }
    },
  },
  plugins: [],
}