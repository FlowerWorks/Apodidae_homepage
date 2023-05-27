export default {
  title: 'Apodidae',
  themeConfig: {
    logo: '/back.svg',
    nav: [
      { text: "Dev Blog", link: "https://devblog.nalanyinyun.top/" },
      { text: "Download", link: "https://github.com/naranyinyun/Apodidae/releases/latest" },
      { text: "Contribution", link: "/contribution"},
      { text: "Guide", link: "/guide"},
    ],
    footer: {
      message: "Open Source under the GPL_V3 License.",
      copyright: "Copyright 2022-2023 Nalanyinyun & Lily Works | <a href='https://status.nalanyinyun.top/'>Status</a>"
    },
    head: [
      'script',
      {defer: '', src: 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "edb2140bf87349168acde21e5b887e05"}'}
    ],
    },
  }
