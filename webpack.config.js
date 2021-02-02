const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // the output bundle won't be optimized for production but suitable for development
  mode: 'development',
  // the app entry point is /src/index.js
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
  	// the output of the webpack build will be in /dist directory
    path: path.resolve(__dirname, 'dist'),
    // the filename of the JS bundle will be bundle.js
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
      	// for any file with a suffix of js or jsx
        test: /\.jsx?$/,
        // ignore transpiling JavaScript from node_modules as it should be that state
        exclude: /node_modules/,
        // use the babel-loader for transpiling JavaScript to a suitable format
        loader: 'babel-loader',
        options: {
          // attach the presets to the loader (most projects use .babelrc file instead)
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
      {
        // for scss files
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader" 
        }, {
          loader: "sass-loader"
        }]
      }
    ]
  },
  // add a custom index.html as the template
  plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') })],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};