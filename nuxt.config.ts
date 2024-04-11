import svgLoader from 'vite-svg-loader'
const isDev = process.env.NODE_ENV === 'development'
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'viewport', content: 'width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover' },
      ],
      link: [
        { rel: 'icon', href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%221em%22 font-size=%2280%22>⚽️</text></svg>' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicon-32x32.png' },
        { rel: 'icon', sizes: '16x16', type: 'image/png', href: '/favicon-16x16.png' },
        { rel: 'mask-icon', color: '#616161', href: '/safari-pinned-tab.svg' },
        { rel: 'manifest', href: '/manifest.json' },
      ],
    },
  },
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxt-alt/proxy',
    'nuxt-windicss',
  ],
  windicss: {
    analyze: true,
  },
  css: ['~/css/main.less'],
  experimental: {
    externalVue: true,
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  routeRules: {
    '/**': isDev ? {} : { cache: { swr: true, headersOnly: true } },
  },
  vite: {
    plugins: [svgLoader()],
  },
  proxy: {
    proxies: {
      '/logo': {
        target: 'https://images.fotmob.com/image_resources/logo',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/logo/, '')
      },
    }
  },
  runtimeConfig: {
    public: {

    },
  },

})
