<script setup lang="ts">
import { computed, ref } from 'vue'

import type { EntityType } from '@/types'
import { useEntitiesStore } from '@/stores/entities'
import TheButton from './TheButton.vue'
import TheDropdown from './TheDropdown.vue'

type EntityTypeItem = {
  id: EntityType
  name: string
}

const entitiesTypesList: EntityTypeItem[] = [
  { id: 'deal', name: 'Сделка' },
  { id: 'contact', name: 'Контакт' },
  { id: 'company', name: 'Компания' }
]

const selected = ref<EntityTypeItem | null>(null)
const isLoading = ref(false)
const canCreate = computed(() => selected.value !== null)

const entities = useEntitiesStore()

function createEntity() {
  const entityTypeItem = selected.value
  if (!entityTypeItem) return

  selected.value = null
  isLoading.value = true
  setTimeout(() => {
    entities.addEntity({ name: entityTypeItem.name, type: entityTypeItem.id })
    isLoading.value = false
  }, 1000)
}
</script>

<template>
  <div class="container">
    <TheDropdown :items="entitiesTypesList" v-model="selected" />
    <TheButton :isLoading="isLoading" :disabled="!canCreate" @click="createEntity" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 30px;
}
</style>
