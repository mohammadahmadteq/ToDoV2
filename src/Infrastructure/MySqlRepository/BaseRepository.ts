import { dataSource } from "@infrastructure/Database/data-source";
import { DeepPartial, Repository } from "typeorm";

export interface IBaseRepository {
  fetchAll: () => Promise<any>;
  fetch: (query: any) => Promise<any>;
  create: (query: any) => Promise<any>;
  remove: (query: any) => Promise<any>;
  update: (query: any, entity: any) => Promise<any>;
  restore: (query: any) => Promise<any>;
}

export abstract class BaseRepository<Model, Entity extends DeepPartial<Model>> implements IBaseRepository {
  protected model: Repository<Model>;

  constructor(name: any) {
    this.model = dataSource.getRepository(name);
  }

  async fetchAll() {
    return this.model.find();
  }

  async fetch(query: any) {
    return this.model.findOne({
      where: query,
    });
  }

  async create(entity: Entity) {
      return this.model.save(entity);
  }

  async restore(query) {
    return await this.model.restore(query);
}

async remove(query){
    return await this.model.delete(query);
}

  async update(query, entity: any) {
    return this.model.update(query, entity);
  }
}
