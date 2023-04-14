import { defineConfig } from 'vitepress'
// import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import {demoBlockPlugin } from 'vitepress-theme-demoblock'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Transformers",
  description: "mitosis",
  base:'/transformers/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'button', link: '/button' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    
  },
  markdown: {
    // theme: {
    //   light: 'vitesse-light',
    //   dark: 'vitesse-dark'
    // },
    config: (md) => {
    md.use(demoBlockPlugin)
    // md.use(componentPreview)
    // md.use(containerPreview)
    }
    }
})
