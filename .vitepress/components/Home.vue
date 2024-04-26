<template>
  <div>
    <button @click="toPage('/guide')">to guide page</button>
  </div>
</template>

<script setup lang="ts">
import { withBase, useRouter } from 'vitepress'

const router = useRouter()

function toPage(link: string) {
  router.go(withBase(link))
}
</script>
