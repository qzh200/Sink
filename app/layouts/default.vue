<script setup lang="ts">
import HoshiumiBackground from '@/components/HoshiumiBackground.vue'
import HoshiumiBackLink from '@/components/HoshiumiBackLink.vue'
import HoshiumiThemeToggle from '@/components/HoshiumiThemeToggle.vue'
</script>

<template>
  <HoshiumiBackground />
  <HoshiumiBackLink />
  <HoshiumiThemeToggle />
  <div class="flex min-h-svh flex-col">
    <a
      href="#main-content"
      class="
        fixed top-4 left-4 z-50 -translate-y-24 rounded-md bg-background px-4
        py-2 text-sm font-medium shadow-lg
        focus:translate-y-0
        focus-visible:ring-2 focus-visible:ring-ring
      "
    >
      跳到主内容
    </a>

    <!--
      原 Sink header（NavigationMenu + GitHub Star + SwitchLanguage + SwitchTheme
      + 移动端 Sheet 菜单）以及 footer（之前已经清空）已全部移除。
      顶部两角按钮由 HoshiumiBackLink（← 返回 Hoshiumi 主页）+ HoshiumiThemeToggle
      （浅色 / 深色 / 跟随系统 三态切换）提供，与 hoshiumi_home / hoshiumi_drive /
      hoshiumi_stats 完全一致。
    -->

    <!-- Main Content：铺满全屏，flex 居中承载 slot -->
    <main
      id="main-content"
      class="flex flex-1 items-center justify-center px-6"
    >
      <slot />
    </main>
  </div>
</template>
