const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.config.common')
const path = require('../paths');

module.exports = merge(commonConfig, {
    mode: 'production',
    output: {
        filename: 'static/js/[name].[hash:8].js',
        path: path.appBuild
    },
    devtool: false
});