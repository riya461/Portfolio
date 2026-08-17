/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fredoka"', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive'],
        body: ['"Quicksand"', 'sans-serif'],
      },
      colors: {
        cream: '#FFF9F0',
        peach: '#FFD6BA',
        coral: '#FF8A65',
        rose: '#E8637A',
        plum: '#9B59B6',
        lavender: '#C8A2E8',
        sky: '#7EC8E3',
        mint: '#A8E6CF',
        lemon: '#FFE66D',
        charcoal: '#2D2D2D',
      },
      boxShadow: {
        'sketchy': '3px 3px 0px #2D2D2D',
        'sketchy-sm': '2px 2px 0px #2D2D2D',
        'sketchy-lg': '5px 5px 0px #2D2D2D',
        'sketchy-coral': '3px 3px 0px #FF8A65',
        'sketchy-plum': '3px 3px 0px #9B59B6',
        'sketchy-sky': '3px 3px 0px #7EC8E3',
        'sketchy-mint': '3px 3px 0px #A8E6CF',
        'float': '0 20px 60px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        'blob': '60% 40% 50% 50% / 50% 60% 40% 50%',
        'blob-2': '40% 60% 50% 50% / 50% 40% 60% 50%',
      },
      animation: {
        'wobble': 'wobble 3s ease-in-out infinite',
        'bob': 'bob 4s ease-in-out infinite',
        'spin-gentle': 'spinGentle 20s linear infinite',
        'float': 'floatUp 6s ease-in-out infinite',
        'float-delayed': 'floatUp 6s ease-in-out 2s infinite',
        'wiggle': 'wiggle 2.5s ease-in-out infinite',
        'pop': 'pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'squish': 'squish 2s ease-in-out infinite',
        'drift': 'drift 12s ease-in-out infinite',
      },
      keyframes: {
        wobble: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        spinGentle: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        floatUp: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg) scale(1)' },
          '25%': { transform: 'rotate(3deg) scale(1.02)' },
          '50%': { transform: 'rotate(-2deg) scale(1)' },
          '75%': { transform: 'rotate(2deg) scale(1.01)' },
        },
        pop: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        squish: {
          '0%, 100%': { borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%' },
          '50%': { borderRadius: '40% 60% 50% 50% / 50% 40% 60% 50%' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(10px, -10px) rotate(5deg)' },
          '50%': { transform: 'translate(-5px, -20px) rotate(-3deg)' },
          '75%': { transform: 'translate(-15px, -8px) rotate(2deg)' },
        },
      },
    },
  },
  plugins: [],
}
