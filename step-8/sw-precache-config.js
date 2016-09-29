module.exports = {
  staticFileGlobs: [
    '/index.html',
    '/manifest.json',
    '/bower_components/webcomponentsjs/webcomponents-lite.js',
    '/src/show-app/chrome-logo.svg'
  ],
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [/^(?!.*\.html$|\/data\/).*/],
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/i\.ytimg\.com/,
      handler: 'fastest',
      options: {
        cache: {
          maxEntries: 100,
          name: 'yt-images-cache'
        }
      }
    },
    {
      urlPattern: /^https:\/\/www\.googleapis\.com\/youtube\/v3\/search/,
      handler: 'networkFirst',
      options: {
        cache: {
          maxEntries: 100,
          name: 'yt-data-cache'
        }
      }
    }
  ]
};
