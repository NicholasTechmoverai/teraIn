const SITE_NAME = 'Tera In'
const SITE_URL = 'https://wwww.tera-in.top'
const API_URL = 'https://apiterain.tera-in.top'

const DEFAULT_DESCRIPTION = 'Find, rent, and swap houses easily with HouseHunter - Your trusted platform for seamless property transactions.'


// SEO Keywords 
const KEYWORDS = [
  'house hunting',
  'property rental',
  'real estate',
  'home swap',
  'apartment finder',
  'rental platform',
  'house exchange',
  'property listing',
  'housing marketplace',
  'accommodation search'
].join(', ')

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  mdc: {
    highlight: {
      noApiRoute: false
    }
  },

  compatibilityDate: '2025-01-15',

  nitro: {
    prerender: {
      routes: [
        '/'
      ]
    }
  },
    components: {
    global: true,
    dirs: [
      { path: '~/components/', pathPrefix: false },
      { path: '~/components/projects', pathPrefix: false },
      { path: '~/components/contact', pathPrefix: false },
    ]
  },


  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
