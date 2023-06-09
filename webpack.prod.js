const path = require('path');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[id].[chunkhash].js',
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      minSize: 1,
      minChunks: 2,
    },
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 2015,
          compress: true,
          sourceMap: false,
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
};

module.exports = merge(commonConfig, prodConfig);
