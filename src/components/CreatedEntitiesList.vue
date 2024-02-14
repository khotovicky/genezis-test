<script setup lang="ts">
import EntitiesListByType from './EntitiesListByType.vue'
</script>

<template>
  <h1>Твои сущности</h1>
  <div class="container">
    <EntitiesListByType type="deal" title="Сделки" background="blue" />
    <EntitiesListByType type="contact" title="Контакты" background="green" />
    <EntitiesListByType type="company" title="Компании" background="velvet" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
}
</style>
