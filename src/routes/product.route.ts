// src\routes\category.route.ts - (created by: logicinfo.com.br/ael)
import ProductController from '../controllers/product.controller'
import { BaseRoute } from './base.route'



class ProductRoute extends BaseRoute<ProductController> {

  constructor() {
    super(new ProductController())
  }
}

export default new ProductRoute().router
