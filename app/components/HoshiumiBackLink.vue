<script setup lang="ts">
/**
 * HoshiumiBackLink —— 左上角「返回 Hoshiumi 主页」按钮
 * 视觉与 home/drive/stats 同款：40px 玻璃圆 + 蓝色 hover + lucide arrow-left 图标。
 */
const HOME_URL = 'https://hoshiumi.xyz/'
</script>

<template>
  <a
    class="back-link"
    :href="HOME_URL"
    aria-label="返回 Hoshiumi 主页"
    title="返回 Hoshiumi 主页"
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M19 12H5" />
      <path d="M12 19l-7-7 7-7" />
    </svg>
  </a>
</template>
