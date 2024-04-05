const ansiRegex = require('ansi-regex')
module.exports = {
  runtimeCompiler: true,
  transpileDependencies: [ansiRegex],
  devServer: {
    port: process.env.VUE_APP_PORT
    ,disableHostCheck: true
  }
};
