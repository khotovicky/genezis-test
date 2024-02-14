import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { EntityType } from '@/types'
import { getUniqueId } from '@/utils'

interface Entity {
  name: string
  type: EntityType
  id: number
}

export const useEntitiesStore = defineStore('entities', () => {
  const entitiesList = {
    deal: ref<Entity[]>([]),
    contact: ref<Entity[]>([]),
    company: ref<Entity[]>([])
  }

  const getListByType = (type: EntityType) => entitiesList[type].value

  const addEntity = (newEntity: Omit<Entity, 'id'>) => {
    getListByType(newEntity.type).push({ ...newEntity, id: getUniqueId() })
  }

  return { addEntity, getListByType }
})
