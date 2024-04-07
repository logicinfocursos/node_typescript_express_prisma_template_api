// src\routes\category.route.ts - (created by: logicinfo.com.br/ael)
import CategoryController from '../controllers/category.controller'
import { BaseRoute } from './base.route'



class CategoryRoute extends BaseRoute<CategoryController> {
  constructor() {
    super(new CategoryController())
  }
}

export default new CategoryRoute().router