module.exports = {
  webpack (config) {
    // Refer to https://bit.ly/2PYA357 and https://git.io/JebjT
    // TODO: https://github.com/zeit/next.js/issues/8601
    config.module.rules.push({
      test: /\.tsx?$/,
      enforce: 'pre',
      exclude: [/node_modules/, /\.next/, /out/],
      use: [
        {
          options: {
            cache: true,
            eslintPath: require.resolve('eslint')
          },
          loader: require.resolve('eslint-loader')
        }
      ]
    })
    return config
  }
}