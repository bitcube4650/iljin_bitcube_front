const ansiRegex = require('ansi-regex')
module.exports = {
  runtimeCompiler: true,
  transpileDependencies: [ansiRegex],
  devServer: {
    port: 18500
  }
};
