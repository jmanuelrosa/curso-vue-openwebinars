var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',

  TOKEN: '"25927eca0050c5292ddcce6acf21ed309d1b4a90"'
})
