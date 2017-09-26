const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const autoprefixer = require('autoprefixer');

/* Setup */
const isProduction = process.argv.indexOf('-p') > -1;
const nameSuffix = new Date().getTime() + (isProduction ? '.min' : '');
const port = 8080;

/* Paths */
const projectPath = path.join(__dirname, '..');
const sourcePath = path.join(projectPath, 'src');
const distPath = path.join(projectPath, 'docs');
const assetsPath = 'assets';
const dataPath = 'data';

const config = {
  entry: path.join(sourcePath, 'index.jsx'),
  output: {
    path: distPath,
    filename: path.join(assetsPath, `[name]${nameSuffix}.js`)
  },
  resolve: {
    root: [path.join(sourcePath)],
    extensions: ['', '.js', '.scss']
  },
  module: {
    loaders: [{
      test: /\.(png)$/i,
      loader: 'file?name=[name].[ext]'
    }, {
      /* styles */
      test: /\.s?css$/,
      loader: ExtractTextPlugin.extract('style', ['css-loader', 'postcss-loader', 'sass-loader'])
    }, {
      /* root static assets. */
      test: /\.ico$/i,
      loader: 'file?name=[name].[ext]'
    }, {
      /* static assets */
      test: /\.woff$/i,
      loader: `file?name=${path.join(assetsPath, '[name].[ext]')}`
    }, {
      /* data, config, mocks */
      test: /\.json$/i,
      loader: `file?name=${path.join(dataPath, '[name].[ext]')}`
    }, {
      /* templates */
      test: /\.(html|htm|svg|tpl)$/i,
      loader: 'template-minify-loader'
    }, {
      /* javascript */
      test: /\.js$/,

      //  include: [sourcePath], <-- include only sourcePath, bugs while using npm dependencies
      loader: 'babel-loader',
      query: {
        cacheDirectory: true,
        presets: [ ['es2015', {
          loose: true
        }] ]
      }

      // plugins: [
      // ['transform-react-jsx', {
      // pragma: 'h'
      // }]
      // ]
    }, {
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  plugins: [
    new ExtractTextPlugin(path.join(assetsPath, `[name]${nameSuffix}.css`), {}),
    new HtmlWebpackPlugin({
      template: path.join(sourcePath, 'index.html'),
      filename: 'index.html',
      allChunks: true
    }),
    new CleanWebpackPlugin([distPath], {
      root: projectPath,
      verbose: false,
      dry: false,
      exclude: ['data']
    })
  ],
  stats: {
    children: false,
    hash: false,
    version: false,
    colors: true
  },
  postcss: () => [autoprefixer],
  sassLoader: {
    includePaths: [sourcePath]
  }
};

if (process.argv.indexOf('--watch') > -1) {
  require('serve-local')(distPath, port);
  config.plugins.push(new LiveReloadPlugin({
    appendScriptTag: true,
    ignore: /.(js|json|ico|woff)$/
  }));
}

if (isProduction) {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));
} else {
  config.devtool = '#eval';
}

module.exports = config;
