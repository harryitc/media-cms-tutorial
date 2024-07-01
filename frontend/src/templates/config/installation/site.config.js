module.exports = {
  devEnv: 'true' === process.env.WEBPACK_DEV_SERVER,
  id: process.env.MEDIACMS_ID || 'Hutech-Media',
  title: process.env.MEDIACMS_TITLE || 'HutechMedia Demo',
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
      svg: './static/images/logo-hutech.png', // @harryitc
      img: './static/images/logo-hutech.png', // @harryitc
    },
    darkMode: {
      svg: './static/images/logo-hutech.png', // @harryitc
      img: './static/images/logo-hutech.png', // @harryitc
    },
  },
  pages: {
    // @harryitc
    // latest: {
    //   title: 'Upload gần đây',
    // },
    // featured: {
    //   title: 'Nổi bật',
    // },
    // recommended: {
    //   title: 'Đề nghị',
    // },
    // members: {
    //   title: 'Danh sách thành viên',
    // },
  },
  userPages: {
    // @harryitc
    // liked: {
    //   title: 'Đã thích',
    // },
    history: {
      title: 'Lịch sử Media',
    },
  },
  taxonomies: {
    // @harryitc
    // tags: {
    //   title: 'Tags',
    // },
    categories: {
      title: 'Danh mục',
    },
  },
};
