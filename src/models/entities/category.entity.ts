// src\models\entities\category.entity.ts - (created by: logicinfo.com.br/ael)
export class Category {
  id: number
  name: string
  created_at: Date
  updated_at: Date

  constructor(id: number, name: string, created_at: Date, updated_at: Date) {

    this.id = id
    this.name = name
    this.created_at = created_at
    this.updated_at = updated_at
  }
}
