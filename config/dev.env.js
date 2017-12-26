'use strict'
// 引入的是webpack的merge插件, 该插件用来合并对象，相同的选项会被覆盖
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
// 将两个配置对象合并
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
