module.exports = {
  entry: ["./src/components/Main.js"],
  output: {
    filename: "public/bundle.js"
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'jshint-loader'
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ],
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  }
}
