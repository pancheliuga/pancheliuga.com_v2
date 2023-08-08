module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  domain: 'pancheliuga.com',
  siteName: 'Oleksandr Pancheliuga',
  siteDescription:
    'Join me on a thrilling journey through the realms of Cloud Engineering, DevOps, Infrastructure as Code (IaC), and Continuous Integration/Continuous Deployment (CI/CD) with a background in geospatial technology. Embrace the adventure of learning and growth in this tech-driven world.',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Oleksandr Pancheliuga', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: 'pancheliuga.o@gmail.com', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: 'https://pancheliuga.com/', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#404040', //  Manifest: defines the default theme color for the application
  themeBgColor: '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg', // fallback/default meta image
    opengraph_default_alt: 'Visible content: pancheliuga.com', // alt text for default meta image
    twitterSite: '', // i.e. @site - twitter profile of the site
    twitterCreator: '', // i.e. @author -  twitter profile of the site
    mastodonProfile: '' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'My Blog',
    description:
      'The latest articles demonstrating my design thinking, strategy and expertise.'
  },
  pagination: {
    itemsPerPage: 6
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    mobileDisplay: '',
    mobileCall: '',
    email: 'pancheliuga.o@gmail.com',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
