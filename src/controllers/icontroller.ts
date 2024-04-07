import { Request, Response } from 'express'

export interface IController {
    getAll(request: Request, response: Response): Promise<void>;
    getById(request: Request, response: Response): Promise<void>;
    getListByKey(request: Request, response: Response): Promise<void>;
    create(request: Request, response: Response): Promise<void>;
    update(request: Request, response: Response): Promise<void>;
    erase(request: Request, response: Response): Promise<void>;
  }