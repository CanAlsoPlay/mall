module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        common: '@/common',
        conponents: '@/conponents',
        views: '@/views',
        network: '@/network'
      }
    }
  }
}
