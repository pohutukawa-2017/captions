const path = require('path')
<<<<<<< HEAD
=======
const LiveReloadPlugin = require('webpack-livereload-plugin')
>>>>>>> ffa17e135c9c90da1fb4afe03b10ff3c1afd8bd3

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
<<<<<<< HEAD
  },
=======

},
  plugins: [
    new LiveReloadPlugin()
  ],
>>>>>>> ffa17e135c9c90da1fb4afe03b10ff3c1afd8bd3
  devtool: 'source-map'
}
