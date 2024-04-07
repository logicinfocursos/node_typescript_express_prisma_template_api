// src\models\entities\base.entity.ts - (created by: logicinfo.com.br/ael)
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
  