/* eslint global-require: "off" */
const webpack = require('@cypress/webpack-preprocessor');

module.exports = (on) => {
  const options = {
    /* eslint import/extensions: "off" */
    webpackOptions: require('../../webpack.config.js'),
  };
  on('file:preprocessor', webpack(options));
};
