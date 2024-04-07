import { BaseRepository } from "./base.repository";
import { Product } from "../entities";


export class ProductRepository extends BaseRepository<Product> {
    constructor() {
      super('product');
    }
  }