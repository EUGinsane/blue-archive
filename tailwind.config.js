module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['play', 'sans-serif'],
    },
    extend: {
      backgroundImage: () => ({
        background: "url('/images/background.png')",
      }),
      animation: {
        rotate: 'rotate',
      },
      keyframes: {
        rotate: {
          from: { transform: 'rotateY(0deg)' },
          to: { transform: 'rotateY(360deg)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
