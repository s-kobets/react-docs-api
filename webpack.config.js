const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'index.build.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ['react-docgen', 'transform-class-properties']
          }
        }
      }
    ]
  }
};
