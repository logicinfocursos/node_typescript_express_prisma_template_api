
import { prisma } from '../../services/prisma';
import { getcode } from '../../functions/getcode'

export abstract class BaseRepository<T> {
  protected readonly prismaModel: any;

  constructor(protected readonly modelName: any) {
    this.prismaModel = prisma[modelName];
  }

  async getAll(): Promise<T[]> {
    return await this.prismaModel.findMany({});
  }

  async getById(id: number): Promise<T | null> {
    return await this.prismaModel.findUnique({
      where: { id },
    });
  }

  async getListByKey(key: string, field: string): Promise<T[]> {
    const whereClause: any = {};
    whereClause[field] = { contains: key };
    return await this.prismaModel.findMany({
      where: whereClause,
    });
  }

  async create(data: T & { code?: string }): Promise<T> {

   // if (data && (!data.code || data.code === '')) data.code = getcode(6, this.prismaModel.substring(0, 3))

    return await this.prismaModel.create({
      data,
    });
  }

  async update(id: number, data: Partial<T>): Promise<T> {
    return await this.prismaModel.update({
      where: { id },
      data,
    });
  }

  async erase(id: number): Promise<T | null> {
    return await this.prismaModel.delete({
      where: { id },
    });
  }
}
