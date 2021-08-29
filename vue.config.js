const package = require('./package.json')

module.exports = () => {
  const reDomain = /^(?:https?:\/\/)?([a-zA-Z0-9-]+\.zuri\.chat)\/?$/
  let { pluginDomain } = package

  if (!reDomain.test(pluginDomain)) {
    console.error(
      `pluginDomain is invalid.\nMake sure the pluginDomain in your package.json is set to a valid plugin url.`
    )
    process.exit(1)
  }

  const isProduction = process.env.NODE_ENV === 'production'
  const publicPath = isProduction
    ? pluginDomain.replace(reDomain, `https://$1/`)
    : '/'
  return { publicPath }
}
