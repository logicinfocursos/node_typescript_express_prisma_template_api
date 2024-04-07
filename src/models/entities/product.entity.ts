// src\models\entities\product.entity.ts
import { BaseEntity, DataType } from './base.entity';

export class Product extends BaseEntity {
  id: number;
  name: string;
  price: number;
  created_at: Date;
  updated_at: Date;

  constructor(id: number, name: string, price: number, created_at: Date, updated_at: Date) {
    // Prepara os dados para passar para a classe base.
    const data: DataType = { id, name, price, created_at, updated_at };
    super(data); // Agora passando os dados corretamente para a classe base.
    
    // As propriedades são definidas dinamicamente pela classe base, mas podemos redefini-las aqui se necessário para clareza ou para adicionar métodos específicos da classe.
    this.id = id;
    this.name = name;
    this.price = price;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }    
}
