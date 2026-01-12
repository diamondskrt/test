<script setup lang="ts">
import type { TypographyVariant } from '../model'

defineProps<{
  variant: TypographyVariant
}>()
</script>

<template>
  <component :is="variant" v-bind="$attrs">
    <slot />
  </component>
</template>
