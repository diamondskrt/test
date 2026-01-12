import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { toast } from 'vue-sonner'

import type { Item } from './types'
import { MAX_USER_ITEMS } from '../config'

const useUserItemsStore = defineStore('user-items', () => {
  const selectedItems = ref<Item[]>([])

  const isSelectedItem = computed(
    () => (item: Item) =>
      selectedItems.value.some((selected) => selected.id === item.id)
  )

  const selectItem = (item: Item) => {
    if (selectedItems.value.length === MAX_USER_ITEMS) {
      toast.error(
        `Достигнут максимальный лимит вещей у пользователя: ${MAX_USER_ITEMS}`
      )
      return
    }
    selectedItems.value = [...selectedItems.value, item]
  }

  const removeItem = (item: Item) => {
    selectedItems.value = selectedItems.value.filter(({ id }) => id !== item.id)
  }

  return { isSelectedItem, selectedItems, selectItem, removeItem }
})

export { useUserItemsStore }
