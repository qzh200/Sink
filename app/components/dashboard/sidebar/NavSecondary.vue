<script setup lang="ts">
import { ArrowUpCircle } from '@lucide/vue'
import { useSidebar } from '@/components/ui/sidebar'

const { t } = useI18n()
const { isMobile, state } = useSidebar()
const { hasUpdate, currentVersion, latestVersion } = useVersionCheck()

const secondaryMenuClass = computed(() => isMobile.value || state.value === 'expanded'
  ? 'flex-row items-center'
  : 'items-center')
const releaseLabel = computed(() => t('sidebar.update', {
  current: currentVersion,
  version: latestVersion.value,
}))
</script>

<template>
  <SidebarGroup>
    <SidebarGroupContent>
      <SidebarMenu :class="secondaryMenuClass">
        <SidebarMenuItem v-if="hasUpdate" :class="{ 'ml-auto': isMobile || state === 'expanded' }">
          <SidebarMenuButton
            as-child
            :tooltip="releaseLabel"
            class="relative w-9 justify-center px-0"
          >
            <a
              href="https://github.com/ccbikai/Sink/releases"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="releaseLabel"
            >
              <ArrowUpCircle aria-hidden="true" />
              <span
                aria-hidden="true"
                class="
                  absolute top-0.5 right-0.5 size-1.5 rounded-full bg-success
                  motion-safe:animate-pulse
                "
              />
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
</template>
