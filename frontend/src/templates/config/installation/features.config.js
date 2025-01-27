module.exports = {
  embeddedVideo: {
    initialDimensions: {
      width: 560, // In pixels.
      height: 315, // In pixels.
    },
  },
  headerBar: {
    hideLogin: true,
    hideRegister: true,
  },
  sideBar: {
    hideHomeLink: false,
    hideTagsLink: false,
    hideCategoriesLink: false,
  },
  media: {
    actions: {
      share: false,
      report: true,
      like: true,
      dislike: false,
      download: false,
      comment: false,
      save: false,
    },
    shareOptions: [
      'embed',
      'fb',
      'tw',
      'whatsapp',
      'telegram',
      'reddit',
      'tumblr',
      'vk',
      'pinterest',
      'mix',
      'linkedin',
      'email',
    ],
  },
  mediaItem: {
    hideDate: false,
    hideViews: false,
    hideAuthor: false,
  },
  playlists: {
    mediaTypes: ['audio', 'video'],
  },
};
