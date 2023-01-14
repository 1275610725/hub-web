const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy:{
      ["/dev-api"]:{
      target:'http://localhost:8081',
        changeOrigin:true,
          pathRewrite: {
              ['^' + "/dev-api"]: ''
          }
      }
  }
  },
  // 相对路径都是相对于index.js所在的目录config开始的

})
