module.exports = {
  /*
  ** Headers of the page
  */

  css: [
    // global cssを読み込む
    {src: '~assets/sass/app.scss', lang: 'scss'}
    // { src: 'bulma/bulma.sass', lang: 'sass' }
  ],
  mode: 'spa',
  head: {
    title: 'yeah',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#eefe7d'},
  /*
  ** Build configuration
  */
  plugins: [
    '~/plugins/i18n.js',
    {src: '~/plugins/ga.js', ssr: false},
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['axios', 'vue-i18n'],
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
