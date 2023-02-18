const path = require('path');
const ESLintLoader = require('eslint-webpack-plugin');
const PrettierLoader = require('prettier-webpack-plugin');

module.exports = {
  entry: ['./src/index.jsx'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  devtool: 'inline-source-map',
  devServer: {
    https: true,
    allowedHosts: 'all',
    // host: 'local.projects.newsday.com',
    port: 3888, // default: 8080
    open: true, // open page in browser to prompt dev to accept security exception
    static: {
      directory: path.join(__dirname, 'public')
    },
    client: {
      webSocketURL: 'wss://localhost:3888/ws'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new ESLintLoader({
      fix: true,
      files: ['**/*.jsx', '**/*.js']
    }),
    new PrettierLoader({ extensions: ['.scss'] })
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};
