export default defineAppConfig({
  ui: {
    colors: {
      primary: 'orange',
      neutral: 'neutral'
    }
  },
  site: {
    name: 'HouseHunter',
    url: 'https://wwww.tera-in.top',
    description: 'Explore and list amazing real estate properties worldwide.',
    apiBase: 'https://apiterain.tera-in.top',
    defaultImage: '/logo.png',
    favicon: '/f_logo.png',
  },

  contact: {
    email: 'info@tera-in.top',
    phone: '+254 741540233',
    address: 'Murang\'a, Kenya',
    activeHours: 'Mon-Fri 9am-5pm EAT'
  },

  links: {
    navigation: [
      {
        label: 'Quick links',
        links: [
          { label: 'Property', to: '/property', icon: 'i-heroicons-home-modern' },
          { label: 'For Rent', to: '/rentals', icon: 'i-heroicons-key' },
          { label: 'Swap', to: '/swap', icon: 'i-heroicons-arrow-path-rounded-square' },
          { label: 'Near Me', to: '/near-me', icon: 'i-heroicons-map-pin' }
        ]
      },
      {
        label: 'Resources',
        links: [
          { label: 'Documentation', to: '/docs', icon: 'i-heroicons-book-open' },
          { label: 'Pricing', to: '/pricing', icon: 'i-heroicons-credit-card' }
        ]
      },
      {
        label: 'Company',
        links: [
          { label: 'About Us', to: '/about', icon: 'i-heroicons-building-office-2' },
          { label: 'Support', to: '/support', icon: 'i-heroicons-lifebuoy' }
        ]
      }
    ],

    social: [
      {
        to: 'https://twitter.com',
        label: 'X (Twitter)',
        icon: 'i-simple-icons-x',
        target: '_blank'
      },
      {
        to: 'https://instagram.com',
        label: 'Instagram',
        icon: 'i-simple-icons-instagram',
        target: '_blank'
      },
      {
        to: 'https://discord.com',
        label: 'Discord',
        icon: 'i-simple-icons-discord',
        target: '_blank'
      },
      {
        to: 'https://linkedin.com',
        label: 'LinkedIn',
        icon: 'i-simple-icons-linkedin',
        target: '_blank'
      },
      {
        to: 'https://facebook.com',
        label: 'Facebook',
        icon: 'i-simple-icons-facebook',
        target: '_blank'
      },
      {
        to: 'https://github.com',
        label: 'GitHub',
        icon: 'i-simple-icons-github',
        target: '_blank'
      },

    ],

    legal: [
      { label: 'Privacy Policy', to: '/privacy', icon: 'i-heroicons-shield-check' },
      { label: 'Terms of Service', to: '/terms', icon: 'i-heroicons-document-text' }
    ],

  }
})
