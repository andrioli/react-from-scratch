import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";
import * as webpack from "webpack";

const config: webpack.Configuration = {
  context: path.join(__dirname, "src"),
  entry: [
    "./main.tsx",
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: "pre",
        use: [
          "tslint-loader",
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          "ts-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", "css-loader", "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3000,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, "public/index.html"),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

export default config;
