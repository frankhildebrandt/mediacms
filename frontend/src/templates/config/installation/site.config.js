module.exports = {
  devEnv: 'true' === process.env.WEBPACK_DEV_SERVER,
  id: process.env.MEDIACMS_ID || 'mediacms-frontend',
  title: process.env.MEDIACMS_TITLE || 'EpsilonTV',
  url: process.env.MEDIACMS_URL || 'UNDEFINED_URL',
  api: process.env.MEDIACMS_API || 'UNDEFINED_API',
  theme: {
    mode: 'light', // Valid values: 'light', 'dark'.
    switch: {
      position: 'sidebar', // Valid values: 'header', 'sidebar'.
    },
  },
  logo: {
    lightMode: {
      img: './static/images/etv.png',
    },
    darkMode: {
      img: './static/images/etv.png',
    },
  },
  pages: {
    latest: {
      title: 'Recent uploads',
    },
    featured: {
      title: 'Featured',
    },
    recommended: {
      title: 'Recommended',
    },
    members: {
      title: 'Members',
    },
  },
  userPages: {
    liked: {
      title: 'Liked media',
    },
    history: {
      title: 'History',
    },
  },
  taxonomies: {
    tags: {
      title: 'Tags',
    },
    categories: {
      title: 'Categories',
    },
  },
};
