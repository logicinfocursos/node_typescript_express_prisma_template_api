// src\routes\category.route.js - (created by: logicinfo.com.br/ael)
import CategoryController from '../controllers/category.controller'
import { BaseRoute } from './base.route'



class CategoryRoute extends BaseRoute {

    constructor() {

        super(CategoryController)
        
    }

    getCategories = (request:any, response:any) => {

        CategoryController.getCategories(request, response)
    
      }
}

export default new CategoryRoute().router