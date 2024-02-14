<script setup lang="ts">
import { useEntitiesStore } from '@/stores/entities'
import type { EntityType } from '@/types'

interface Props {
  type: EntityType
  title: string
  background: string
}

defineProps<Props>()

const entities = useEntitiesStore()
</script>

<template>
  <div class="column">
    <h2>{{ title }}</h2>
    <ul class="entitiesList">
      <li
        v-for="entity in entities.getListByType(type)"
        class="entitiesListItem"
        :class="background"
      >
        <div class="id">{{ entity.id }}</div>
        <div class="name">{{ entity.name }}</div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.column {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.entitiesList {
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.entitiesListItem {
  display: flex;
  padding: 12px;
  border-radius: 5px;
}

.blue {
  background: linear-gradient(to left, rgb(140, 140, 230), white);
}
.velvet {
  background: linear-gradient(to left, rgb(227, 126, 221), white);
}

.green {
  background: linear-gradient(to left, rgb(115, 226, 115), white);
}
.id {
  width: 10%;
}
.name {
  width: 90%;
}
</style>
