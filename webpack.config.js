var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackConfig = {
  entry: {
      'ddm-datepicker': './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      { 
        test: /\.js?$/, 
        loader: 'babel-loader', exclude: /node_modules/ 
      },
      {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        // url-loader will fallback to file-loader if limit is exceeded. It will pass all of the query args along.
        loader : 'url-loader?limit=1&name=./font/[name].[ext]?[hash]'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }
    ]
  },
  externals: {
    // "react": "React", // React is external (require("react"))
    // b: true, // b is external (require("b"))
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [path.join(__dirname, "node_modules"), path.join(__dirname, "web_modules")]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
}

if('production' === process.env.NODE_ENV){
  // replace 'NODE_ENV' variable in the code with 'production'.
  // This will be use for dead code elimination in the minification step below.
  webpackConfig.plugins.push(
  new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
  );
  // Uglify - minify and remove comments for production
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      mangle: true,
    })
  );
}

module.exports = webpackConfig;
