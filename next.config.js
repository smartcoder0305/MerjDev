const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const withSASS = require('@zeit/next-sass');
const compose = require('next-compose');
const withTM = require('next-plugin-transpile-modules');

const cssConfig = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
    url: false
  }
};
const fontsConfig = {};
const imagesConfig = {};
const sassConfig = {
  cssModules: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '/static/images/[name].[ext]'
        },
      },   
    },
    )
    return config
    
  }
};
const tmConfig = {
  transpileModules: ['velocity-trade-date-picker'],
};

function disableCacheDirectory(config) {
  config.module.rules = config.module.rules.map(rule => {
    if (rule.use.loader && rule.use.loader === 'next-babel-loader') {
      rule.use.options.cacheDirectory = false;
    }
    return rule;
  });

  return config;
}

module.exports = compose([
  [withTM, tmConfig],
  [withCSS, cssConfig],
  [withFonts, fontsConfig],
  [withImages, imagesConfig],
  [withSASS, sassConfig],
  {
    webpack: (config) => {
      // disableCacheDirectory(config);
      return config;
    },
  },
]);

