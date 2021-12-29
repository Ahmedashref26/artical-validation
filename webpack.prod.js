const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TeserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  entry: "./src/client/index.js",
  mode: "production",
  optimization: {
    minimizer: [new TeserPlugin(), new CssMinimizerPlugin()],
  },
  output: {
    filename: "main.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: "/.js$/",
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new WorkboxPlugin.GenerateSW(),
  ],
};
