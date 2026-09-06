<script setup lang="ts">
/**
 * HoshiumiBackground —— 极光 + 渐变 + 星星 + 噪点背景
 * 与 hoshiumi_home / hoshiumi_drive / hoshiumi_stats 同款，由主题色 token 驱动。
 * 星星位置用 mulberry32 + 固定种子生成，构建可复现。
 */
function mulberry32(seed: number): () => number {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
function hashString(value: string): number {
  let hash = 2166136261
  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i)
    hash = Math.imul(hash, 16777619)
  }
  return hash >>> 0
}

const STAR_COUNT = 22
const seed = hashString('sink.hoshiumi.xyz#stars')
const rand = mulberry32(seed)
const stars = Array.from({ length: STAR_COUNT }, () => ({
  left: `${Math.round(rand() * 98)}%`,
  top: `${Math.round(rand() * 96)}%`,
  animationDelay: `${(rand() * 6).toFixed(2)}s`,
  animationDuration: `${(4.5 + rand() * 4.5).toFixed(2)}s`,
  kind: rand() > 0.82 ? 'lg' : 'sm',
}))
</script>

<template>
  <div class="bg-scene bg-scene--moving" aria-hidden="true">
    <div class="bg-scene__layer bg-scene__tint" />
    <div class="bg-scene__layer">
      <div class="orb orb--a" />
      <div class="orb orb--b" />
      <div class="orb orb--c" />
    </div>
    <div class="bg-scene__layer">
      <i
        v-for="(s, i) in stars"
        :key="i"
        :class="['star', s.kind === 'lg' ? 'star--lg' : 'star--sm']"
        :style="{
          left: s.left,
          top: s.top,
          animationDelay: s.animationDelay,
          animationDuration: s.animationDuration,
        }"
      />
    </div>
    <div class="bg-scene__layer bg-scene__noise" />
  </div>
</template>
