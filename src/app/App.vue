<script setup lang="ts">
import 'vue-sonner/style.css'
import { HomePage } from '~/pages/home'
import { Sonner } from '~/shared/ui'

import './styles/global.css'

const MAX_VISIBLE_TOASTS = 1
</script>

<template>
  <HomePage />
  <Sonner rich-colors :visible-toasts="MAX_VISIBLE_TOASTS" />
</template>
