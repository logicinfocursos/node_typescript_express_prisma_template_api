// src\routes\product.route.js - (created by: logicinfo.com.br/ael)
import ProductController from '../controllers/product.controller'
import { BaseRoute } from './base.route'



class ProductRoute extends BaseRoute {

  constructor() {

    super(ProductController)
    
  }



  getProducts = (request:any, response:any) => {

    ProductController.getProducts(request, response)

  }



  getProductById = (request:any, response:any) => {

    ProductController.getProductById(request, response)

  }



  getProductByKey = (request:any, response:any) => {

    ProductController.getProductByKey(request, response)

  }



  getProductsByKey = (request:any, response:any) => {

    ProductController.getProductsByKey(request, response)

  }

}

export default new ProductRoute().router
