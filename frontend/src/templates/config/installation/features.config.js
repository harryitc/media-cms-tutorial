module.exports = {
  embeddedVideo: {
    initialDimensions: {
      width: 560, // In pixels.
      height: 315, // In pixels.
    },
  },
  headerBar: {
    hideLogin: false,
    hideRegister: false,
  },
  sideBar: {
    hideHomeLink: false,
    hideTagsLink: false,
    hideCategoriesLink: false,
  },
  media: {
    actions: {
      share: true,
      report: false, // @harryitc
      like: true,
      dislike: true,
      download: true,
      comment: false, // @harryitc
      save: true,
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
