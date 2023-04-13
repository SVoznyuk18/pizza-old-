const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  resolve: {
    alias: {
      ActionsRoot: path.resolve(__dirname, './src/actions'),
      ConfigsRoot: path.resolve(__dirname, './src/configs'),
      ComponentsRoot: path.resolve(__dirname, './src/components'),
      AssetsRoot: path.resolve(__dirname, './src/assets'),
      UtilsRoot: path.resolve(__dirname, './src/utils'),
      LayoutRoot: path.resolve(__dirname, './src/layout')
    },
    extensions: ['.js', '.jsx', '.json']
  },
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HTMLWebpackPlugin({template: "./public/index.html"}),
    new MiniCssExtractPlugin({filename: '[name].[contenthash].css'})
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      {
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ["@babel/preset-react", '@babel/preset-env']
            ]
          }
        }
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
            MiniCssExtractPlugin.loader, 
            "css-loader",
            {
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        plugins: [require('postcss-preset-env')]
                    }
                }
            }
        ],
      },
      {
        test: /\.woff|woff2|eot|ttf?$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      },
      {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              }
            }
          },
        ],
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]'
        }
      }
    ]
  }
};