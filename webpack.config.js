module.exports = {
  // Other configurations...
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'], // Add this line
      },
      // Other rules...
    ],
  },
};