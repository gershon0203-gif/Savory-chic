/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxe: {
          gold: '#D4A853',
          goldLight: '#E8C97A',
          cream: '#FFF8E7',
          dark: '#0A0A0A',
          dark2: '#141414',
          dark3: '#1A1A1A',
          red: '#8B1A1A',
          redLight: '#C0392B',
          warm: '#2C1810',
          text: '#F5F0E8',
          muted: '#A09888',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80')",
        'about-pattern': "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 168, 83, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 168, 83, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
