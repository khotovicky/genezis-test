export type EntityType = 'deal' | 'contact' | 'company'

export type Entity = {
  name: string
  type: EntityType
  id: number
}
