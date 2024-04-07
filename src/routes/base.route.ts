// src\routes\base.route.js - (created by: logicinfo.com.br/ael)
import { Router } from 'express'
import ProductController from '../controllers/product.controller'
import CategoryController from '../controllers/category.controller'



export class BaseRoute {

  public router
  protected controller
  constructor(controller:any) {

    this.router = Router()
    this.controller = controller
    this.setupRoutes()

  }



  getAll = (request:any, response:any) => {
    
    this.controller.getAll(request, response)

  }



  getById = (request:any, response:any) => {

    this.controller.getById(request, response)

  }


  getListByKey = (request:any, response:any) => {

    this.controller.getListByKey(request, response)

  }



  create = (request:any, response:any) => {

    this.controller.create(request, response)

  }



  update = (request:any, response:any) => {

    this.controller.update(request, response)

  }



  erase = (request:any, response:any) => {

    this.controller.erase(request, response)

  }



  setupRoutes() {

    this.router.get('/', this.getAll)
    this.router.get('/:id?', this.getById)
    this.router.get("/:key?/:field?", this.getListByKey);
    this.router.post('/', this.create)
    this.router.put('/:id?', this.update)
    this.router.patch('/:id?', this.update)
    this.router.delete('/:id?', this.erase)
    
    this.router.get('/getProducts', ProductController.getProducts)
    this.router.get('/getProductById/:id?', ProductController.getProductById)
    this.router.get('/getProductByKey/:key?/:field?', ProductController.getProductByKey)
    this.router.get('/getProductsByKey/:key?/:field?', ProductController.getProductsByKey)

    this.router.get('/getCategories', CategoryController.getCategories)
  }  
}
