require('dotenv').config()

const withCSS = require('@zeit/next-css')
const withTM = require('next-transpile-modules')
const { META } = require('./constants/metadata')

// Add this line
const isProd = process.env.NODE_ENV === 'production'

module.exports = withCSS(
  withTM({
    // New Configuration for GitHub Pages
    output: 'export',
    assetPrefix: isProd ? '/personal-website/' : '',
    basePath: isProd ? '/personal-website' : '',

    transpileModules: ['react-flexbox-grid', 'react-syntax-highlighter'],
    webpack(config, { isServer }) {
      if (isServer) {
        // eslint-disable-next-line global-require
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
    async redirects() {
      return [
        {
          source: '/twitter',
          destination: `https://twitter.com/${META.social.twitter}`,
          permanent: true,
        },
        {
          source: '/linkedin',
          destination: `https://linkedin.com/in/${META.social.linkedin}`,
          permanent: true,
        },
        {
          source: '/instagram',
          destination: `https://instagram.com/${META.social.instagram}`,
          permanent: true,
        },
        {
          source: '/github',
          destination: `https://github.com/${META.social.github}`,
          permanent: true,
        }
      ]
    },
  })
)
