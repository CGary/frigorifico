const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = (env, { mode }) => {
  let entry = {
    app: path.resolve(__dirname, "src/index.jsx"),
  };

  let output = {
    path: path.resolve(__dirname, "dist"),
  };

  let plugins = [
    new HtmlPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new Dotenv(),
  ];

  const babelLoaderRule = {
    test: /\.(js|jsx)$/,
    use: "babel-loader",
    exclude: /node_modules/,
  };

  const fileLoaderRule = {
    test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
    use: {
      loader: "file-loader",
      options: {
        outputPath: "assets/",
      },
    },
  };

  const cssLoaderRule = {
    test: /\.css$/i,
  };

  const resolve = {
    extensions: [".js", ".jsx"],
  };

  let devServer = undefined;

  if (mode === "development") {
    output = {
      ...output,
      filename: "js/[name].js",
      chunkFilename: "js/[id].js",
    };

    //file-loader
    fileLoaderRule.use.options.name = "[name].[ext]";

    //css-loader
    cssLoaderRule.use = ["style-loader", "css-loader"];

    devServer = {
      hot: true,
      historyApiFallback: true,
      port: 8081,
      host: "0.0.0.0",
    };
  }

  if (mode === "production") {
    output = {
      ...output,
      filename: "js/[name].[contenthash].js",
      chunkFilename: "js/[id].[chunkhash].js",
    };

    const { CleanWebpackPlugin } = require("clean-webpack-plugin");
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");
    plugins = [
      ...plugins,
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash].css",
        chunkFilename: "css/[id].[contenthash].css",
      }),
    ];

    //file-loader
    fileLoaderRule.use.options.name = "[name].[contenthash].[ext]";

    //css-loader
    cssLoaderRule.use = [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: "",
        },
      },
      "css-loader",
    ];
  }

  return {
    mode,
    entry,
    output,
    plugins,
    module: { rules: [babelLoaderRule, fileLoaderRule, cssLoaderRule] },
    resolve,
    devServer,
  };
};
