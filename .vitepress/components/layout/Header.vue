<template>
  <div class="layout-header">
    <div class="layout-header-content">
      <div @click="toPage('/')">Home</div>
      <div>LayoutHeader</div>
      <div />
    </div>
  </div>
</template>

<script setup lang="ts">
import { withBase, useRouter } from 'vitepress'

const router = useRouter()

function toPage(link: string) {
  router.go(withBase(link))
}
</script>

<style scoped>
.layout-header {
  width: 100%;
  height: var(--vp-nav-height);
  background: #ffffff1a;
}
.layout-header-content {
  width: var(--vp-layout-max-width);
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
