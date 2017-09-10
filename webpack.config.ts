import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.tsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'ts-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000
  }
};

export default config;
