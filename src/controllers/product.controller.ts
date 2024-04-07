// src\controllers\product.controller.ts - (created by: logicinfo.com.br/ael)
import { BaseController } from './base.controller'
import { ProductRepository } from '../models/repositories/product.repository'



class ProductController extends BaseController {

  constructor() {

    const prismaModel = 'product'
    const repository = new ProductRepository()

    super(prismaModel, repository)

    this.repository = repository
  }



  async getProducts(_:any, response:any) {

    try {

      const result = await this.repository.getProducts()

      response.status(200).send(result)

    } catch (e) {

      response.status(400).send(e)

    }
  }



  async getProductById(request:any, response:any) {

    try {
      const { id } = request.params

      const result = await this.repository.getProductById(Number(id))

      response.status(200).send(result)
    } catch (e) {
      response.status(400).send(e)
    }
  }



  async getProductByKey(request:any, response:any) {

    try {
      const { key, field } = request.params

      const result = await this.repository.getProductByKey(key, field)

      response.status(200).send(result)
    } catch (e) {
      response.status(400).send(e)
    }
  }



  async getProductsByKey(request:any, response:any) {

    try {
      const { key, field } = request.params

      const result = await this.repository.getProductsByKey(key, field)

      response.status(200).send(result)
    } catch (e) {
      response.status(400).send(e)
    }
  }

}

export default new ProductController()