const phone = '+254786408933'
const email = 'solutionsvibrant2@gmail.com'

export default defineAppConfig({
  ui: {
    colors: {
      primary: 'gold',
      neutral: 'slate'
    }
  },

  site: {
    name: 'Elite events',
    url: 'https://eliteevents.tera-in.top',
    logo: 'https://eliteevents.tera-in.top/logo.png',
    sendConfirmEmailToUser: true,
    email: email,
    tel: phone,
    description: 'Streamline your event planning platform  designed  for weddings,corporate events and private parties offering elegant design and seamless booking.',
    keywords: ['event planning', 'weddings', 'corporate events', 'private parties', 'event management', 'event services', 'event booking', 'event coordination', 'event solutions', 'Elite Events'],

  },
  links: {
    navigation: [
      {
        label: 'Quick links',
        links: [
          { label: 'Home', to: '/', icon: 'i-heroicons-home-modern' },
          { label: 'Portfolio', to: '/portfolio', icon: 'i-heroicons-key' },
          { label: 'About US', to: '/about-us', icon: 'i-heroicons-arrow-path-rounded-square' },
          { label: 'Book Event', to: '/book-event', icon: 'i-heroicons-map-pin' }
        ]
      },
      {
        label: 'Services',
        links: [
          { label: 'Weddings', to: '/portfolio?tab=wedding&scroll=0', icon: 'i-heroicons-book-open' },
          { label: 'Ruracio (Traditional)', to: '/portfolio?tab=traditional&scroll=0', icon: 'i-heroicons-credit-card' },
          { label: 'Church Events', to: '/portfolio?tab=church&scroll=0', icon: 'i-heroicons-credit-card' },
          { label: 'Corporate Events', to: '/portfolio?tab=corporate&scroll=0', icon: 'i-heroicons-credit-card' },
          { label: 'Music Performances', to: '/portfolio?tab=music&scroll=0', icon: 'i-heroicons-credit-card' }
        ]
      },
      {
        label: 'Contact',
        links: [
          { label: `${phone}`, to: `tel:${phone}`, icon: 'i-lucide-phone' },
          { label: `${email}`, to: `mailto:${email}`, icon: 'i-lucide-mail' },
          { label: 'Nairobi,Kenya', to: '', icon: 'i-lucide-map-pin' }

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
        to: 'https://linkedin.com',
        label: 'LinkedIn',
        icon: 'i-simple-icons-linkedin',
        target: '_blank'
      }
    ],

    legal: [
      { label: 'crafted by tera-in', to: 'https://tera-in.top', icon: 'i-lucide-wrench' },
    ],

    misc: [
      { label: 'Whatsapp', icon: 'i-simple-icons-whatsapp', to: `https://wa.me/${phone}` },
      { label: 'instagram', icon: 'i-simple-icons-instagram', to: '/' },
      { label: 'facebook', icon: 'i-simple-icons-facebook', to: '/' },
    ]

  }
})
