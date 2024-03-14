const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,  
  publicPath:'/pulmuone/',
  outputDir: "dist"
  // publicPath: process.env.NODE_ENV === 'resources'
  //   ? '/study/'
  //   : '/pulmuone'
})
