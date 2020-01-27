let mix = require('laravel-mix')

/**
 * Laravel Mix Clean.
 */
class Clean {
  /**
   * Dependencies for plugin.
   *
   * @return {String[]}
   */
  dependencies() {
    this.requiresReload = true

    return [
      'clean-webpack-plugin',
    ]
  }

  /**
   * Plugin functionality.
   *
   * @param options
   */
  register(options = {}) {
      this.options = options
  }

  /*
   * Plugins to be merged with the master webpack config.
   *
   * @return {Array|Object}
   */
  webpackPlugins() {
    const { CleanWebpackPlugin } = require('clean-webpack-plugin')
    return new CleanWebpackPlugin(this.options)
  }
}

mix.extend('clean', new Clean())