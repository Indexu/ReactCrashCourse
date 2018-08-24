const merge = require('webpack-merge'); // eslint-disable-line
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // eslint-disable-line
const common = require('./webpack.common.js');

module.exports = (env, argv) =>
  merge(common(env, argv), {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          sourceMap: true,
        }),
      ],
    },
  });
