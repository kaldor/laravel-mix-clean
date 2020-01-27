# Laravel Mix Clean
[![Latest Version on NPM](https://img.shields.io/npm/v/laravel-mix-clean.svg?style=flat-square)](https://npmjs.com/package/laravel-mix-clean)
[![npm](https://img.shields.io/npm/dt/laravel-mix-clean.svg?style=flat-square)](https://www.npmjs.com/package/laravel-mix-clean)
[![Software License](https://img.shields.io/npm/l/laravel-mix-clean.svg?style=flat-square)](LICENSE)

This extension adds support for [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin) to [Laravel Mix](https://github.com/JeffreyWay/laravel-mix).

## Installation

```
npm i -D laravel-mix-clean
```

## Usage

Require the extension inside your ``webpack.mix.js`` and add clean-css configurations like this:

```javascript
const mix = require('laravel-mix');

require('laravel-mix-clean');

mix
  .sass('src/app.scss', 'dist')
  .sass('src/app.sass', 'dist')
  .less('src/app.less', 'dist')
  .stylus('src/app.styl', 'dist')

  // Run default output cleaning
  .clean()

  // Run clean with
  .clean({
    // ...options
  })
```

For more information about clean-webpack-plugin configurations please refer to their [documentation](https://github.com/johnagan/
clean-webpack-plugin/blob/master/README.md).