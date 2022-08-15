const customForms = require('@tailwindcss/forms');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      minWidth: {
        72: '18rem',
        74: '22rem',
        76: '26rem',
        78: '30rem',
        '6xl': '1000px',
      },
      maxWidth: {
        '8xl': '1920px',
        500: '500px',
      },
      minHeight: {
        '2xl': '20rem',
        '3xl': '30rem',
        '4xl': '40rem',
        '5xl': '50rem',
      },
      spacing: {
        40: '9rem',
        50: '11rem',
        60: '17rem',
        75: '19rem',
        100: '26rem',
        120: '28rem',
        140: '30rem',
        160: '32rem',
        180: '34rem',
        200: '36rem',
        '2/3-screen': '65vh',
        '3/4-screen': '75vh',
        '1/10': '10%',
        '5/100': '5%',
      },
      boxShadow: {
        'outline-normal': '0 0 0 2px var(--accent-2)',
      },
      blur: {
        '4xl': '500px',
      },
      scale: {
        120: '1.2',
      },
      flex: {
        2: '2 2 0%',
      },
    },
  },
  plugins: [customForms],
};
