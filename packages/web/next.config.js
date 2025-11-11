// packages/web/next.config.js
require('dotenv').config()

const withCSS = require('@zeit/next-css')
const withTM = require('next-transpile-modules')
const { META } = require('./constants/metadata')

module.exports = withCSS(
  withTM({
    images: {
      unoptimized: true,
    },

    transpileModules: ['react-flexbox-grid', 'react-syntax-highlighter'],
    webpack(config, { isServer }) {
      if (isServer) {
        require('./scripts/generateSitemap')
      }

      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      })

      return config
    },
    target: 'serverless',
    env: {
      RECAPTCHA_CLIENT_KEY: process.env.RECAPTCHA_CLIENT_KEY,
      GA_TRACKING_ID: process.env.GA_TRACKING_ID,
      TWITCH_CLIENT_ID: process.env.TWITCH_CLIENT_ID,
      TWITCH_OAUTH_ID: process.env.TWITCH_OAUTH_ID,
      Aryan_BACKEND_URL: process.env.Aryan_BACKEND_URL,
    },
  })
)
