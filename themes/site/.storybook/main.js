const path = require('path');
const webpack = require('webpack');

module.exports = {
  stories: [
    '../components/**/*.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-viewport',
  ],

  staticDirs: [
    '../dist',
    '../assets/images',
    '../assets/icons',
  ],

  framework: {
    name: '@storybook/html-webpack5',
    options: {},
  },

  webpackFinal: async (config) => {
    // Inyectar jQuery automáticamente en todos los módulos
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      })
    );

    // Alias para asegurar la resolución correcta de jQuery
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      jquery: require.resolve('jquery'),
    };

    return config;
  },
};
