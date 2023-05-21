const path = require('path');
const entryPath = path.join(__dirname, 'client', 'index.js');

module.exports = {
  mode: 'production',
  entry: entryPath,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].chunk.js',
  },
  optimization: {
    usedExports: true, // Enable tree shaking
    minimize: true, // Enable code minification (optional)
  },
  devtool: 'source-map',
  devServer: {
    port: 3009,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, 'client'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/i,

        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.svg$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
};
