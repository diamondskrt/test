<script setup lang="ts">
import {
  AspectRatio,
  Button,
  Card,
  CardContent,
  CardFooter,
  Typography,
} from '~/shared/ui'

import { type Item } from '../model'

defineProps<{
  item: Item
  isSelectedItem: boolean
}>()

defineEmits<{
  (e: 'select-item', item: Item): void
}>()
</script>

<template>
  <Card class="w-full gap-2 overflow-hidden border-none py-0">
    <AspectRatio :ratio="16 / 9">
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        fill
        class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
      />
    </AspectRatio>
    <CardContent class="px-2">
      <Typography variant="h6">{{ item.name }}</Typography>
    </CardContent>
    <CardFooter class="px-2 pb-2">
      <Button v-if="isSelectedItem" disabled size="sm" class="w-full">
        Выбрано
      </Button>
      <Button
        v-else
        size="sm"
        class="w-full"
        @click="$emit('select-item', item)"
      >
        Выбрать
      </Button>
    </CardFooter>
  </Card>
</template>
