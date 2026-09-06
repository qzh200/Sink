<script setup lang="ts">
/**
 * 原本的首页是营销页：Hero / Logos / Features / Stats / Testimonials / CTA。
 * 按用户要求"全删"，首页只保留一个"前往管理面板"的入口。
 * 左上角"返回 Hoshiumi 主页"由 HoshiumiBackLink 提供（来自 default.vue 布局）。
 *
 * 高度由 default.vue 的 <main> 控制：min-h-svh + flex 居中，
 * 这里只负责排版内部三段（标题 / 描述 / 按钮）。
 */
import { Button } from '@/components/ui/button'
</script>

<template>
  <div
    class="
      flex w-full max-w-2xl flex-col items-center gap-6
      text-foreground
    "
  >
    <h1 class="text-3xl font-semibold text-balance md:text-4xl">
      星链 · 短链接服务
    </h1>
    <p class="max-w-md text-center text-base text-muted-foreground">
      短链接生成、统计、管理 — 全部在仪表盘里完成。
    </p>
    <Button as-child size="lg">
      <NuxtLink to="/dashboard/links">
        前往仪表盘
      </NuxtLink>
    </Button>
  </div>
</template>
