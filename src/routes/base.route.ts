// src\routes\base.route.ts - (created by: logicinfo.com.br/ael)
import { Router, Request, Response } from 'express'
import { IController } from '../controllers/icontroller'


export abstract class BaseRoute<T extends IController<any>> {

  public router: Router
  protected controller: T

  constructor(controller:T) {
    this.router = Router()
    this.controller = controller
    this.setupRoutes()
  }




  getAll = (request: Request, response: Response) => {
    this.controller.getAll(request, response)
  }




  getById = (request: Request, response: Response) => {
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
    this.router.get("/:key?/:field?", this.getListByKey)
    this.router.post('/', this.create)
    this.router.put('/:id?', this.update)
    this.router.patch('/:id?', this.update)
    this.router.delete('/:id?', this.erase)
  }  
}