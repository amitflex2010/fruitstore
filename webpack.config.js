const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
var webpackConfig = {
  devtool: 'inline-source-map',
  entry: {
    main: './src/main.ts'
  }, resolve: {
    extensions: ['.ts', '.js', '.scss']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: ['ts-loader', 'angular2-template-loader']
    },
    {
      test: /\.html$/,
      use: 'html-loader'
    },
    {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ],
    },
    ]
  },
  // devServer: {
  //   writeToDisk: true
  // },
};
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
});
webpackConfig.plugins = [
  htmlWebpackPlugin,
];
module.exports = webpackConfig;