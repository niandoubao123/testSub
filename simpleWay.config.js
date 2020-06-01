const path = require('path')
const CopyWebpackPlugin = require('./simpleWay/node_modules/copy-webpack-plugin')
module.exports = {
  filenameHashing: false,
  pages: {
    index: {
      template: '../index.html', // 路径是基于 vue.config.js 来的
    }
  },
  outputDir: '../dist',
  productionSourceMap: false,
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch-index')
    // 移除 preload 插件
    config.plugins.delete('preload-index');
    config.devServer.disableHostCheck(true);
    config.devServer.open(true);
  },
  configureWebpack: {
    plugins: [
      // copy custom static assets
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, './login.html'),
          to: path.resolve(__dirname, './dist/login.html'),
        }
      ]),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, './static'),
          to: path.resolve(__dirname, './dist/static'),
        }
      ])
    ]
  }
}