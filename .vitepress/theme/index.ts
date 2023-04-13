import theme from 'vitepress/dist/client/theme-default/index'
import  Transformers from '../../index.js'
import '@vitepress-demo-preview/component/dist/style.css'

export default {
  ...theme,
  enhanceApp({app}) {
    app.use(Transformers)
  }
}
