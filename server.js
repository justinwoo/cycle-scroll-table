var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');

var config = require('./webpack.config');

// patch up config as we need
config.entry = [
  'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
  'webpack/hot/only-dev-server',
  './src/main' // Your appʼs entry point
];

config.output = {
  path: path.join(__dirname, 'target'),
  filename: 'main.js',
  publicPath: '/target/'
};

config.module = {
  loaders: [{
      test: function (filename) {
        if (filename.indexOf('node_modules') !== -1) {
          return false;
        } else {
          return /\.js$/.test(filename) !== -1;
        }
      },
      loaders: ['react-hot', 'babel-loader']
  }]
};

config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
];

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
