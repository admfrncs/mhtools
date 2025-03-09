module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-preset-env': {
      stage: 3, // You can adjust this based on your needs
      browsers: 'last 2 versions', // Customize this to target specific browsers
    },
  },
};
