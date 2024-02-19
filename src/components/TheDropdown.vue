<script setup lang="ts">
import { computed, ref } from 'vue'

interface Item {
  id: string
  name: string
}

interface Props {
  items: Item[]
}

defineProps<Props>()
const value = defineModel<Item | null>({ default: null })

const isOpened = ref(false)
const toggle = () => (isOpened.value = !isOpened.value)

const buttonText = computed<string>(() => value.value?.name || 'Не выбрано')

const setValue = (newValue: Item | null) => {
  value.value = newValue
  isOpened.value = false
}
</script>

<template>
  <div>
    <button @click="toggle" class="button">
      {{ buttonText }}
    </button>
    <div class="container">
      <ul class="dropdown" :class="{ active: isOpened }" :value="value">
        <li @click="setValue(null)" :class="{ selected: value === null }">Не выбрано</li>
        <li
          v-for="item in items"
          @click="setValue(item)"
          :class="{
            selected: (() => {
              if (value) return item.name === value.name
            })()
          }"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
}

.button {
  font-size: 16px;
  padding: 8px 10px;
  min-width: 290px;
  position: relative;
  background: white;
  border: 0.1px solid #c9c7c7;
  border-radius: 2px;
  box-shadow: #d9d7d7 0 1px;
  text-align: left;
  color: #888;
  text-shadow: #888 0.1px 0.1px;
  cursor: pointer;
}
.button::before {
  content: '';
  position: absolute;
  background: black;
  width: 8px;
  height: 1px;
  bottom: 50%;
  right: 5px;
  transform: rotate(-45deg);
}
.button::after {
  content: '';
  position: absolute;
  background: black;
  width: 8px;
  height: 1px;
  bottom: 50%;
  right: 10px;
  transform: rotate(45deg);
}

.dropdown {
  display: none;
  border: 1px solid #999;
  border-radius: 3px;
}

.dropdown.active {
  display: block;
  position: absolute;
  top: 24px;
  min-width: 300px;
  background: white;
}
.dropdown li {
  padding: 10px 30px;
  cursor: pointer;
}
.dropdown li.selected {
  background-color: rgba(153, 153, 153, 0.2);
  position: relative;
}

.dropdown li.selected::before {
  content: '✓';
  position: absolute;
  left: 8px;
}
</style>
