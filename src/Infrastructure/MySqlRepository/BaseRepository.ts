import { dataSource } from "@infrastructure/Database/data-source";
import { Repository } from "typeorm";

export interface IBaseRepository {
  fetchAll: () => Promise<any>;
  fetch: (query: any) => Promise<any>;
}

export abstract class BaseRepository<Model, Entity> implements IBaseRepository {
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
}
