import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Products, ProductsModel } from './produtcs.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Products')
    private readonly productsModel: Model<ProductsModel>,
  ) {}

  async findAll(name?: string, tag?: string): Promise<Array<Products>> {
    if (name && tag) {
      return this.productsModel.find({
        name: { $regex: name, $options: 'i' },
        tags: { $in: [tag] },
      });
    }

    if (name) {
      return this.productsModel.find({
        name: { $regex: name, $options: 'i' },
      });
    }

    if (tag) {
      return this.productsModel.find({
        tags: { $in: [tag] },
      });
    }

    return this.productsModel.find();
  }

  async findByIndex(index: number): Promise<Products> {
    return this.productsModel.findOne({ index });
  }
}
