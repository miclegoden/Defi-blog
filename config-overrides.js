const webpack = require('webpack')

module.exports = function override(config, env) {
  config.ignoreWarnings = [/Failed to parse source map/]
  const fallback = (config.resolve.fallback = {
    url: require.resolve('url'),
    fs: require.resolve('fs'),
    assert: require.resolve('assert'),
    crypto: require.resolve('crypto-browserify'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    os: require.resolve('os-browserify/browser'),
    buffer: require.resolve('buffer'),
    stream: require.resolve('stream-browserify'),
  })
  config.resolve.fallback = fallback
  config.ignoreWarnings = [/Failed to parse source map/]

  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  )
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ])
  config.module.rules.push({
    test: /\.m?js/,
    resolve: {
      fullySpecified: false,
    },
    enforce: 'pre',
    use: ['source-map-loader'],
  })
  config.resolve.extensions = ['*', '.mjs', '.js', '.json', '.gql', '.graphql']
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ])

  return {
    ...config,
    stats: { warnings: false },
  }
}
