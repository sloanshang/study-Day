const path = require('path');
const webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

const publicUrl = '../public';

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    bundle:[  './index.js'],
    common:['react','react-dom','redux','react-redux','react-router','echarts-for-react','react-bootstrap','bootstrap'],
    vendor:['antd','antd-mobile']
  },
  
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
    filename: '[name].js',
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use:  'babel-loader',
      },
      {
        test: /\.css$/,
        // use: ['style-loader','css-loader' ],
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })

      },
      {
        test: /\.(jpg|png|gif|svg|eot|ttf|woff|woff2)$/,
        use:[
          {
            loader:'file-loader',options:{name: 'static/media/[name].[ext]'}
          }
        ]
      },
      {
        test: /\.less$/,
        // use: ["style-loader", "css-loader", "less-loader",]
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader","less-loader"]
        })
      },

      {
        test: /\.(sass|scss)$/,
        // use: ["style-loader", "css-loader", "sass-loader",]
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader","sass-loader"]
        })
      }
    ],
  },
  resolve: {
    modules: ['node_modules', path.join(__dirname, '../node_modules')],
    extensions: ['*', '.web.js', '.js', '.json'],
  },
  plugins:[
    new ExtractTextPlugin("styles.css"),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new InterpolateHtmlPlugin({
      PUBLIC_URL: publicUrl
    }),
    new HtmlWebpackPlugin({
      template:publicUrl+ '/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    // new webpack.optimize.UglifyJsPlugin(), //minify everything
    new webpack.optimize.AggressiveMergingPlugin(),//Merge chunks
    new webpack.optimize.CommonsChunkPlugin({
         names: ['vendor','common'],
         minChunks: Infinity
      }),
   
  ],
};
