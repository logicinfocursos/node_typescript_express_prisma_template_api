// src\controllers\base.controller.ts - (created by: logicinfo.com.br/ael)
import { IController } from './icontroller'
import { Request, Response } from 'express'
import { IRepository } from '../models/repositories/irepository'

export abstract class BaseController<T> implements IController<T> {
  protected repository: IRepository<T>

  constructor(repository: IRepository<T>) {
    this.repository = repository
  }



  async getAll(_: Request, response: Response): Promise<T[] | void | null> {

    try {

      const result = await this.repository.getAll()

      response.status(200).send(result)

    } catch (e) {

      response.status(400).send(e)

    }
  }



  async getById(request: Request, response: Response): Promise<T | void | null> {

    try {
      const result = await this.repository.getById(Number(request.params.id))

      response.status(200).send(result)

    } catch (e) {

      response.status(400).send(e)

    }
  }



  async getListByKey(request: Request, response: Response): Promise<T[] | void | null> {

    try {
      const { key, field } = request.params

      const result = await this.repository.getListByKey(key, field)

      response.status(200).send(result)
    } catch (e) {
      response.status(400).send(e)
    }
  }


  
  async create(request: Request, response: Response): Promise<T | void | null> {

    try {
      const result = await this.repository.create(request.body)

      response.status(201).send(result)

    } catch (e) {

      response.status(400).send(e)

    }
  }



  async update(request: Request, response: Response): Promise<T | void | null> {

    try {
      const result = await this.repository.update(Number(request.params.id), request.body)

      response.status(200).send(result)

    } catch (e) {

      response.status(400).send(e)

    }
  }



  async erase(request: Request, response: Response): Promise<T | void | null> {

    try {
      const result = await this.repository.erase(Number(request.params.id))

      response.status(200).send(result)

    } catch (e) {

      response.status(400).send(e)

    }
  }
}
