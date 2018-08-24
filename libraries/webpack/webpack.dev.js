const merge = require('webpack-merge'); // eslint-disable-line
const fs = require('fs');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = (env, argv) => {
  const certificateRelativePath = '../ssl/localhost.pfx';
  const certificatePassphrase = 'Vip123$.';

  const certificatePath = path.resolve(__dirname, certificateRelativePath);

  const pfx = fs.readFileSync(certificatePath);

  return merge(common(env, argv), {
    devServer: {
      contentBase: './dist',
      open: true,
      overlay: true,
      inline: true,
      https: true,
      pfx,
      pfxPassphrase: certificatePassphrase,
    },
    mode: 'development',
    devtool: 'eval',
    optimization: {
      minimizer: [],
    },
  });
};
