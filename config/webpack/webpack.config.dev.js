const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.config.common')
const path = require('../paths');

module.exports = merge(commonConfig, {
    mode: 'development',
    output: {
        filename: 'static/js/[name].js',
        path: path.appBuild
    },
    devtool: 'cheap-module-source-map'
});