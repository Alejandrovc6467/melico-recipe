const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const purgecssPlugin = purgecss.default || purgecss;

module.exports = {
  plugins: [
    autoprefixer,
    ...(process.env.NODE_ENV === 'production'
      ? [
          purgecssPlugin({
            content: [
              './components/**/*.js',
              './components/**/*.jsx',
              './components/**/*.ts',
              './components/**/*.tsx',
              './components/**/*.twig',
              './components/**/*.html',
              '../../../../../web/modules/custom/**/*.twig',
              '../../../../../web/themes/custom/**/*.twig',
              '../../../../../web/themes/custom/**/*.html',
            ],
            safelist: [
              /^js-/,
              /^is-/,
              /^has-/,
              /^messages/,
              /^alert/,
              /^btn/,
              /^modal/,
              /^node-title-inline/,
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
          }),
        ]
      : []),
  ],
};
