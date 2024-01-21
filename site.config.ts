import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '05a2624b3a2f4029a3540174600bd7f7',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'goojiong\'s archive',
  domain: 'goojiong.vercel.app',
  author: 'Jiyeon Koo',

  // open graph metadata (optional)
  // description: 'Example Next.js Notion Starter Kit Site',

  // social usernames (optional)
  github: 'noeyiz',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/About Me': '23d2c9165ad94e2aa0ffe85b0b3dc4fa'
  // },
  pageUrlOverrides: null,

  isSearchEnabled: false,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About Me',
      pageId: '23d2c9165ad94e2aa0ffe85b0b3dc4fa'
    },
  ]
})
