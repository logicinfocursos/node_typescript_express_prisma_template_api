// src\controllers\product.controller.ts - (created by: logicinfo.com.br/ael)
import { BaseController } from './base.controller'
import { ProductRepository } from '../models/repositories/product.repository'
import { Product } from '../models/entities/product.entity'

class ProductController extends BaseController<Product> {

  constructor() {

    super(new ProductRepository())
    
  }
}

export default ProductController