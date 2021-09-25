const HtmlWebpackPlugin = require('html-webpack-plugin')

console.log(__dirname);

module.exports = {
  entry: './src/index.ts',
  output: {
    path: __dirname + '/../dist/',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js', '.ts', 'tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: [{
          loader: 'ts-loader'
        }],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/tpl/index.html'
    })
  ]
}