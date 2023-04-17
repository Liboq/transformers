import { defineConfig } from 'vitepress'
// import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import {demoBlockPlugin } from 'vitepress-theme-demoblock'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Transformers",
  description: "mitosis",
  base:'/transformers/',
  outDir: '../docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'introduce', link: '/guide/introduce' }
    ],

    sidebar: [
      // 向导
      {
        text: 'Guide',
        items: [
          { text: 'introduce', link: '/guide/introduce' },
        ]
      },
      // 基础组件
      {
        text: 'Basic',
        items: [
          { text: 'button', link: '/basic/button' },
        ]
      },
      // 表单组件
      {
        text: 'Nav',
        items: [
          { text: 'navigation', link: '/navigation' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Liboq/transformers' }
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
