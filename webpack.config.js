var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "rivraddon.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Simplex code challenge",
      template: "./public/index.html",
      inject: false,
      configFile: '/rivraddon.js'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
        include: path.resolve(__dirname, "/src"),
      },
      {
        test: require.resolve(__dirname + "/src/index.js"),
        loader: "expose-loader",
        options: "rivraddon",
      },
    ],
  },
};
