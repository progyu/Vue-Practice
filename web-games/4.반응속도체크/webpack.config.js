const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.vue'],
  },
  entry: {
    app: path.join(__dirname, 'main.js'),
  },
  module: {
    rules: [{
      test: /\.vue$/,
      exclude: /node_modules/,
      use: 'vue-loader',
    }, {
      test: /\.css$/,
      use: [
        'vue-style-loader',
        'css-loader',
      ]
    }],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './ResponseCheck.html'
    }),
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js',
  },
};