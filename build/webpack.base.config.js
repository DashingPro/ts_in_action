import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

export default {
  entry: './src/index.ts',
  output: {
    path: path.resolve() + '/../dist/',
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