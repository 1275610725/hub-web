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
  }
})
