const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js' ),
  output: {
    path: 'docs',
    filename: 'bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Controls: 'src/components/Controls.jsx',
      Board: 'src/components/Board.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.scss$/,  // regex to select only .css files
        loader: 'style-loader!css-loader!sass-loader'			// the sass-loader converts the sass into css, the css-loader puts that css into the javascript, the style-loader then puts the javascript into the DOM.
      },
      { 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      },
      // These loaders are rquired by React-Bootstrap: png, jpg, woff, ttf, eot, svg
      { 
        test: /\.png$/, 
        loader: "url-loader?limit=100000" 
      },
      { 
        test: /\.jpg$/, 
        loader: "file-loader" 
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  devServer: {    // npm i -D webpack-dev-server
    contentBase: path.join(__dirname, 'src'),
    inline: true,    // removes the iframe around the webpage
    host: 'localhost', // Defaults to `localhost` anyway
    port: 8080, // Default is 8080 anyway
    proxy: {
      '/api': 'http://localhost:3000/'  //forwards api requests to the backend server port.
    }
  },
  plugins: [
    new HtmlWebpackPlugin({ // npm i -D html-webpack-plugin. Enables specifying location of index.html file... so can put in src and don't require the build dir for development, i.e. don't have to run webpack.
      template: path.join(__dirname, 'src', 'index.html'),
      inject: false   // this is required, otherwise the code gets injected twice into the bundle.js, so console.logs show up twice for example.
    }),
      new webpack.HotModuleReplacementPlugin({
      multiStep: true
    })
  ]
}
