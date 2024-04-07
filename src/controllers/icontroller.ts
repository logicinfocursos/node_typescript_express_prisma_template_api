// src\controllers\icontroller.ts - (created by: logicinfo.com.br/ael)
import { Request, Response } from 'express'

  export interface IController<T> {
    getAll(request: Request, response: Response): Promise<T[] | void | null>
    getById(request: Request, response: Response): Promise<T | void | null>
    getListByKey(request: Request, response: Response): Promise<T[] | void | null>
    create(request: Request, response: Response): Promise<T | void | null>
    update(request: Request, response: Response): Promise<T | void | null>
    erase(request: Request, response: Response): Promise<T | void | null>
  }