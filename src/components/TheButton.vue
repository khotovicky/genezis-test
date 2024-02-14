<script setup lang="ts">
defineProps<{
  disabled: boolean
  isLoading: boolean
}>()

const emit = defineEmits(['click'])
</script>

<template>
  <button
    v-if="isLoading == false"
    :disabled="disabled"
    class="button"
    :class="{ disabled }"
    @click="emit('click')"
  >
    Создать
  </button>
  <div v-else class="loaderContainer">
    <div class="loader"></div>
  </div>
</template>

<style scoped>
.button {
  min-width: 80px;
  padding: 5px 10px;
  border: 1px solid #999;
  border-radius: 2px;
  font-weight: bold;
  cursor: pointer;
  background: rgb(9, 152, 223);
  color: white;
}
.button.disabled {
  color: #555;
  background-color: white;
  cursor: not-allowed;
}

.loaderContainer {
  display: grid;
  min-width: 36px;
  margin: 0 24px;
  background: #3498db;
  border-radius: 3px;
}

.loader {
  justify-self: center;
  display: inline-block;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-right: 2px solid #3498db;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  align-self: center;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
