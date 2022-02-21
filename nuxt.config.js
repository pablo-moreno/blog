import theme from '@jsilva-pt/nuxt-content-theme-blog'

const baseUrl = 'https://blog.spookydev.com'

const publicRuntimeConfig = {
  baseUrl: 'https://blog.spookydev.com',

  logoLight: '/itsme.png',
  logoDark: '/itsme.png',

  githubOwner: 'pablo-moreno',
  githubRepository: 'blog',
  githubMainBranch: 'master',

  twitterUsername: 'spookydeveloper',
  linkedinUsername: 'pablo-moreno-pradas',

  sharingBlogPostEnabled: true,
  sharingDefaultHashtags: ['spookydev'],
}

export default theme({
  feedOptions: {
    title: 'Pablo Moreno',
    description: '',
    link: baseUrl,
  },
  publicRuntimeConfig,
  pwa: {
    manifest: {
      short_name: 'Pablo Moreno',
    },
    meta: {
      author: 'Pablo Moreno',
      theme_color: '#2C3E50',
      ogHost: baseUrl,
      twitterCard: 'summary_large_image',
      twitterSite: publicRuntimeConfig.twitterUsername,
      twitterCreator: publicRuntimeConfig.twitterUsername,
    },
  },
  i18n: {
    locales: [
      {
        code: 'es',
        iso: 'es-ES',
        name: 'Castellano',
      },
    ],
    defaultLocale: 'es',
    vueI18n: {
      fallbackLocale: 'es',
      messages: {
        en: require('./i18n/en-US'),
        es: require('./i18n/es-ES'),
      },
    },
  },
})
