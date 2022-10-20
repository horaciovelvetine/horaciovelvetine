module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-primary'
          : {
          50: '#e9e9e9',
          100: '#d1d1d1',
          200: '#bababa',
          300: '#a6a6a6',
          400: '#8d8d8d',
          500: '#767676',
          600: '#5f5f5f',
          700: '#484848',
          800: '#313131',
          900: '#1b1b1b',
        },
        'bg-sidebar-primary'
          : {
          50: '#e9e9e9',
          100: '#d1d1d1',
          200: '#bababa',
          300: '#a6a6a6',
          400: '#919191',
          500: '#7b7b7b',
          600: '#656565',
          700: '#4f4f4f',
          800: '#393939',
          900: '#242424',
        },
        'icon-fill': '#b3b3b3',
        'ui-text': '#a6a6a6',
        'acc-gray': '#8c8c8c',
        'window': '#281c2c',
        'tomato': '#ff5e57',
        'dark-orange': '#f68219',
        'goldenrod': '#febd2d',
        'gold': '#fec500',
        'limegreen': '#28c740',
        'dodger-blue': '#1988ff',
        'dark-orchid': '#a550a6',
        'hot-pink': '#f64e9e',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
