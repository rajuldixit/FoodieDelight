const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    publicPath: "/",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,
              disable: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      pages: path.resolve(__dirname, "src/pages/"),
      shared_components: path.resolve(__dirname, "src/shared_components/"),
      hooks: path.resolve(__dirname, "src/hooks/"),
      components: path.resolve(__dirname, "src/components/"),
      services: path.resolve(__dirname, "src/services/"),
      state: path.resolve(__dirname, "src/state/"),
      utils: path.resolve(__dirname, "src/utils/"),
      assets: path.resolve(__dirname, "src/assets/"),
      context: path.resolve(__dirname, "src/context/")
    },
    extensions: [".*", ".js", ".jsx", ".ts", ".tsx"],
    preferRelative: true
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "build")
    },
    port: 4000, // Port for the development server
    open: true // Open the default web browser when the server starts
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html")
    }),
    new Dotenv()
  ]
};
