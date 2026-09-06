<script setup lang="ts">
/**
 * HoshiumiThemeToggle —— 右上角三态切换按钮（浅色 / 深色 / 跟随系统）
 *
 * 与 hoshiumi_home / hoshiumi_drive / hoshiumi_stats 的 ThemeToggle 视觉一致：
 * 40px 玻璃圆 + sun/moon/monitor 三个 lucide 内联 SVG。
 * 图标显示由 :root[data-theme-choice] 驱动，由下方 onMounted 内同步。
 *
 * Sink 自带的 @nuxtjs/color-mode 仍然负责实际的 color scheme 切换与 .dark class，
 * 这里只做"包装"，把它的 preference 同步到 :root data attribute 并包装点击循环。
 */
const colorMode = useColorMode()

const ORDER = ['light', 'dark', 'system'] as const

function cycle() {
  const current = colorMode.preference
  const idx = ORDER.indexOf(current as (typeof ORDER)[number])
  colorMode.preference = ORDER[(idx + 1) % ORDER.length]!
}

if (import.meta.client) {
  const root = document.documentElement
  const sync = () => {
    root.setAttribute('data-theme-choice', colorMode.preference)
  }
  sync()
  watch(() => colorMode.preference, sync)
}
</script>

<template>
  <button
    class="theme-toggle"
    type="button"
    :aria-label="`切换主题（当前：${colorMode.preference}）`"
    title="切换主题"
    @click="cycle"
  >
    <span class="theme-toggle__icon theme-toggle__icon--light" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    </span>
    <span class="theme-toggle__icon theme-toggle__icon--dark" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </span>
    <span class="theme-toggle__icon theme-toggle__icon--system" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 20h8M12 18v2" />
      </svg>
    </span>
  </button>
</template>
