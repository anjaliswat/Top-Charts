const path = require('path');

module.exports = {
  entry: './src/app.js', //where entire app starts
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', //style tag
          'css-loader' //adds style.css
        ]
      },
      {
        test: /\.js$/, //what kind of files you want to resolve. ALl files with js but excpet for node_modules
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist') //if we didn't add this it would servde the whole directory.
  },
};
