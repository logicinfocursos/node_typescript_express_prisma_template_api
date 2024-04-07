// src\models\repositories\irepository.ts - (created by: logicinfo.com.br/ael)
export interface IRepository<T> {
    getAll(): Promise<T[] | void | null>
    getById(id: number): Promise<T | void | null>
    getListByKey(key: string, field: string): Promise<T[] | void | null>
    create(entity: T): Promise<T | void | null>
    update(id: number, entity: T): Promise<T | void | null>
    erase(id: number): Promise<T | void | null>
  }

 