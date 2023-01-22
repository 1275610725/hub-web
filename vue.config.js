const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  runtimeCompiler: true,
  transpileDependencies: true,
  devServer: {
    port: 8080, //端口，如果被占用，自动加1
    host: "0.0.0.0", //localhost 主机名127.0.0.1  真机0.0.0.0
    https: false, //是否使用https协议
    open: false, //启动服务时是否自动打开浏览器访问
    proxy: {
      '/api': {
        target: 'http://localhost:9090/',
        changeOrigin: true,
        // pathRewrite: {
        //   ['^' + "/api"]: ''
        // }
      }
    }
  },
})
