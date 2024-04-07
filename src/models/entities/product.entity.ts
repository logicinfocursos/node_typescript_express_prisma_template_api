// src\models\entities\product.entity.ts - (created by: logicinfo.com.br/ael)
export class Product {
  id: number;
  name: string;
  price: number;
  created_at: Date;
  updated_at: Date;

  constructor(id: number, name: string, price: number, created_at: Date, updated_at: Date) {
  this.id = id;
    this.name = name;
    this.price = price;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }    
}
