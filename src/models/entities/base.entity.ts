// src\models\entities\base.entity.ts
export type DataType = {
    [key: string]: any;
  };
  
  export class BaseEntity {
    [key: string]: any;
  
    constructor(data: DataType) {
      for (let key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          this[key] = data[key];
        }
      }
      console.log(">>> BaseEntity - data: ", data);
    }
  }
  