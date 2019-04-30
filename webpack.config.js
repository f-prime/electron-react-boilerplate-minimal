const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./renderer.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { 
      extensions: ["*", ".js", ".jsx"], 
      alias:{
        'react-dom': '@hot-loader/react-dom' 
      }
  },
  output: {
    path: path.join(__dirname, "/dist/"),
    publicPath: "./dist/",
    filename: "../bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
