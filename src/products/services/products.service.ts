import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  tableName,
  Products,
  ProductsModel,
  createSelectNameQuery,
  createSelectTagsQuery,
} from '../produtcs.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(tableName)
    private readonly productsModel: Model<ProductsModel>,
  ) {}

  async insertMany(produtcs: Array<Products>): Promise<boolean> {
    if (!produtcs) {
      return false;
    }
    try {
      await this.productsModel.insertMany(produtcs);
    } catch (error) {
      Logger.error('Someting is wrong', error);
    }
    return true;
  }

  async findAll(name?: string, tag?: string): Promise<Array<Products>> {
    if (name && tag) {
      return this.productsModel.find({
        name: createSelectNameQuery(name),
        tags: createSelectTagsQuery(tag),
      });
    }

    if (name) {
      return this.productsModel.find({
        name: createSelectNameQuery(name),
      });
    }

    if (tag) {
      return this.productsModel.find({
        tags: createSelectTagsQuery(tag),
      });
    }

    return this.productsModel.find();
  }

  async findByIndex(index: number): Promise<Products> {
    return this.productsModel.findOne({ index });
  }
}
