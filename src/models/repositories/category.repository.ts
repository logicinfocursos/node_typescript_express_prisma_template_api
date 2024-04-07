// src\models\repositories\category.repository.ts - (created by: logicinfo.com.br/ael)
import { BaseRepository } from "./base.repository";
import { Category } from "../entities";

export class CategoryRepository extends BaseRepository<Category> {
  constructor() {
    super('category');
  }
}