<template>
  <Suspense>
    <div class="layout">
      <LayoutHeader />
      <div class="layout-wrapper vp-doc">
        <div class="layout-content">
          <NotFound v-if="pageData.isNotFound" />
          <HomePage v-else-if="frontmatter.page === 'Home'" />
          <Content v-else />
        </div>
      </div>
      <LayoutFooter />
    </div>
  </Suspense>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import NotFound from 'vitepress/dist/client/theme-default/NotFound.vue'
import HomePage from '../Home.vue'
import LayoutHeader from './Header.vue'
import LayoutFooter from './Footer.vue'

defineOptions({ name: 'WBLayout', inheritAttrs: false })

const { page: pageData, frontmatter } = useData()
</script>

<style scoped>
.layout {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.layout-wrapper {
  width: 100%;
  height: calc(100% - var(--vp-nav-height) * 3);
  padding: 3rem calc((100% - var(--vp-layout-max-width)) / 2);
  overflow-y: auto;
}
.layout-content {
  width: 100%;
}
</style>
