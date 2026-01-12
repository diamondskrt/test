<script setup lang="ts">
import { ThemeSwitcher, Typography } from '~/shared/ui'

import { useHideOnScroll } from '../composables'
import { navLinks } from '../config'

const { isHidden } = useHideOnScroll()
</script>

<template>
  <header
    :class="[
      'bg-background fixed top-0 left-0 z-10 flex h-16 w-full items-center justify-between px-4 py-2 shadow transition-transform duration-300 ease-out',
      isHidden ? '-translate-y-full' : 'translate-y-0',
    ]"
  >
    <Typography variant="p" class="mb-0 cursor-not-allowed">LOGO</Typography>
    <nav>
      <ul class="flex gap-4">
        <li
          v-for="link in navLinks"
          :key="link.href"
          class="cursor-not-allowed"
        >
          {{ link.name }}
        </li>
      </ul>
    </nav>
    <ThemeSwitcher />
  </header>
</template>
