// src\controllers\category.controller.ts - (created by: logicinfo.com.br/ael)
import { BaseController } from './base.controller'
import { CategoryRepository } from '../models/repositories/category.repository'
import { Category } from '../models/entities/category.entity'

class CategoryController extends BaseController<Category> {

  constructor() {

    super(new CategoryRepository())
    
  }
}

export default CategoryController