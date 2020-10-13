module.exports = {
  publicPath: './',//打包后的位置(如果不设置这个静态资源会报404)
  // assetsSubDirectory: 'static',
  // assetsPublicPath: '/',
  // 在proxyTable里边进行配置
  devServer:{
    proxy:{
      '/api': {
        target: "http://api.douban.com/v2/movie", //目标服务器
        changeOrigin:true, // 是否改变请求源
        pathRewrite:{ // 路径重写
          "^/api":''
        }
      }
    }
  }
}