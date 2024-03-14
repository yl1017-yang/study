const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir:'./docs',
  // publicPath:'/resources/study/pulmuone',
  // publicPath: process.env.NODE_ENV === 'resources'
  //   ? '/study/'
  //   : '/pulmuone'
})
