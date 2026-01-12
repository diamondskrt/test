<script setup lang="ts">
import { Separator, Typography } from '~/shared/ui'

import { MAX_ITEMS, MAX_USER_ITEMS, leftItems, rightItems } from '../config'
import ItemCard from './ItemCard.vue'
import ShoppingCard from './ShoppingCard.vue'
import { useItemsStore, useUserItemsStore } from '../model'

const userItemsStore = useUserItemsStore()
const itemsStore = useItemsStore()
</script>

<template>
  <div class="flex h-full flex-col gap-6 p-2 md:gap-12 md:p-4">
    <div class="flex items-start justify-between">
      <div class="min-w-1/4 rounded-xl border">
        <div
          v-if="userItemsStore.selectedItems.length > 0"
          class="grid grid-cols-3 gap-2 p-2"
        >
          <ShoppingCard
            v-for="item in userItemsStore.selectedItems"
            :item="item"
            :key="item.id"
            :is-selected-item="userItemsStore.isSelectedItem(item)"
            @remove-item="userItemsStore.removeItem"
          />
        </div>
        <Typography
          v-else
          variant="p"
          class="text-muted-foreground py-2 text-center"
        >
          Выберите до {{ MAX_USER_ITEMS }} элементов
        </Typography>
      </div>
      <div class="min-w-1/4 rounded-xl border">
        <div
          v-if="itemsStore.selectedItems.length > 0"
          class="grid grid-cols-3 gap-2 p-2"
        >
          <ShoppingCard
            v-for="item in itemsStore.selectedItems"
            :item="item"
            :key="item.id"
            :is-selected-item="itemsStore.isSelectedItem(item)"
            @remove-item="itemsStore.removeItem"
          />
        </div>
        <Typography
          v-else
          variant="p"
          class="text-muted-foreground py-2 text-center"
        >
          Выберите {{ MAX_ITEMS }} элемент
        </Typography>
      </div>
    </div>
    <div class="flex h-full items-center space-x-6 md:space-x-12">
      <div class="grid w-full gap-2 md:w-1/2 md:grid-cols-2 xl:grid-cols-3">
        <ItemCard
          v-for="item in leftItems"
          :item="item"
          :key="item.id"
          :is-selected-item="userItemsStore.isSelectedItem(item)"
          @select-item="userItemsStore.selectItem"
        />
      </div>
      <Separator orientation="vertical" />
      <div class="grid w-full gap-2 md:w-1/2 md:grid-cols-2 xl:grid-cols-3">
        <ItemCard
          v-for="item in rightItems"
          :item="item"
          :key="item.id"
          :is-selected-item="itemsStore.isSelectedItem(item)"
          @select-item="itemsStore.selectItem"
        />
      </div>
    </div>
  </div>
</template>
