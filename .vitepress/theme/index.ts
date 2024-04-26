import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from '../components/layout/Index.vue'

const theme: Theme = {
    ...DefaultTheme,
    Layout,
    extends: DefaultTheme
  }
  
  export default theme