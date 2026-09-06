<script setup lang="ts">
/**
 * HoshiumiBackLink —— 左上角「返回 Hoshiumi 主页」按钮
 * 视觉与 home/drive/stats 同款：40px 玻璃圆 + 蓝色 hover + lucide arrow-left 图标。
 *
 * 在 dashboard layout 下，当 sidebar 展开时，sidebar 自身的「星链 / 短链接服务」品牌区
 * 会占住左上角，固定定位的返回按钮会盖在上面。设置 `auto-hide-on-sidebar` 即可在
 * sidebar 展开时自动隐藏（仅 dashboard layout 需要；default layout 的 login 页
 * 没有 SidebarProvider，prop 保持默认即可）。
 */
import { useSidebar } from '@/components/ui/sidebar'

const HOME_URL = 'https://hoshiumi.xyz/'
const props = withDefaults(
  defineProps<{ autoHideOnSidebar?: boolean }>(),
  { autoHideOnSidebar: false },
)

const sidebarState = (() => {
  if (!props.autoHideOnSidebar) return null
  try {
    const { state } = useSidebar()
    return state
  } catch {
    return null
  }
})()

const visible = computed(() => {
  if (!sidebarState) return true
  return sidebarState.value !== 'expanded'
})
</script>

<template>
  <a
    v-if="visible"
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
