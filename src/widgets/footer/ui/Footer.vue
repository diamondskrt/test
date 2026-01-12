<script setup lang="ts">
import { Typography } from '~/shared/ui'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="flex h-24 w-full shrink-0 items-center justify-center p-2">
    <Typography variant="small" class="text-muted-foreground">
      © {{ currentYear }} Test App. All rights reserved.
    </Typography>
  </footer>
</template>
