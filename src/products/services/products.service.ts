import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Products,
  ProductsModel,
  createSelectNameQuery,
  createSelectTagsQuery,
} from './produtcs.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Products')
    private readonly productsModel: Model<ProductsModel>,
  ) {}

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
