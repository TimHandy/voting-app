const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js' ),
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js'
  },
  context: path.resolve(__dirname, 'src'),
  resolve: {
   modules: [
    path.join(__dirname),
      "node_modules"
    ],
    alias: {
      Controls: 'src/components/Controls.jsx',
      Board: 'src/components/Board.jsx'
    },
    extensions: ['.js', '.jsx']
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        use: ['babel-loader'],
        // options: {
        //   presets: ['react', 'es2015', 'stage-0']
        //},
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.scss$/,  // regex to select only .css files
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]			// the sass-loader converts the sass into css, the css-loader puts that css into the javascript, the style-loader then puts the javascript into the DOM.
      }
    ]
  },
  devServer: {    // npm i -D webpack-dev-server
    hot: true,
    contentBase: path.resolve(__dirname, 'src'),
    inline: true,    // removes the iframe around the webpage
    publicPath: '/public',    // match the output `publicPath`
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({ // npm i -D html-webpack-plugin. Enables specifying location of index.html file... so can put in src and don't require the build dir for development, i.e. don't have to run webpack.
      template: path.resolve(__dirname, 'src', 'index.html'),
      inject: false   // this is required, otherwise the code gets injected twice
    }),

    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ]
}
