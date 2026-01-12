<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '~/shared/lib'
import { Typography } from '~/shared/ui'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <Typography
    variant="h5"
    data-slot="card-title"
    :class="cn('leading-none', props.class)"
  >
    <slot />
  </Typography>
</template>
