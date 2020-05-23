import { Injectable } from '@nestjs/common';
import { Products } from './products.interface';
import * as MOCKED_PRODUCTS_JSON from '../../samples/products.json';

@Injectable()
export class ProductsService {
  private readonly products: Products[] = MOCKED_PRODUCTS_JSON.products;

  async findAll(name?: string, tag?: string): Promise<Array<Products>> {
    if (name && tag) {
      return this.products.filter(
        item => item.name === name && item.tags.includes(tag),
      );
    }
    if (name) {
      return this.products.filter(item => item.name === name);
    }
    if (tag) {
      return this.products.filter(item => item.tags.includes(tag));
    }

    return this.products;
  }

  async findById(id: number): Promise<Products> {
    return this.products.find(item => Number(item.id) == id);
  }
}
