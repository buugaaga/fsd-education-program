const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.pug$/,
        use: [
            
            "html-loader",
            {
              loader: "pug-html-loader",
              options: {
                pretty: true
              }
            }
          ]
      },
      {
        test: /\.scss$/,
        use: [
            // MiniCssExtractPlugin.loader,
            "style-loader", // style nodes from js strings
            "css-loader",
            "sass-loader"
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: 'first.html',
      template: './src/pages/firstpage/first.pug'
    }),
    new HtmlWebPackPlugin({
      filename: 'second.html',
      template: './src/pages/secondpage/second.pug'
      }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    
  ]
};
