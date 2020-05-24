import * as mongoose from 'mongoose';
import { ProductsService } from './products.service';
import { ProductsSchema } from './produtcs.model';
import * as MOCK_PRODUCTS_DATA from '../../../samples/products.json';

describe('Products service', () => {
  const MOCKED_PRODUCTS_VALUE = MOCK_PRODUCTS_DATA.products;
  let productsModel = null;
  let service = null;

  beforeEach(() => {
    productsModel = mongoose.model('Products', ProductsSchema);
    productsModel.find = jest.fn(async param => {
      return MOCKED_PRODUCTS_VALUE.filter(item => {
        if (param && param.name && param.tags) {
          return (
            item.name.includes(param.name.$regex) ||
            item.tags.includes(param.tags.$in[0])
          );
        }
        if (param && param.name) {
          return item.name.includes(param.name.$regex);
        }
        if (param && param.tags) {
          return item.tags.includes(param.tags.$in[0]);
        }
        return true;
      });
    });
    productsModel.findOne = jest.fn(async param => {
      return MOCKED_PRODUCTS_VALUE.find(item => item.id === param.index);
    });
    service = new ProductsService(productsModel);
  });

  describe('findAll', () => {
    it('should return an array of Products', async () => {
      const products = await service.findAll();
      expect(products).not.toBeNull();
      expect(products).not.toBeUndefined();
      expect(products.length).toBeGreaterThan(0);
    });
    it('sould return an array of Products filtred by name and tag', async () => {
      const products = await service.findAll('WRAP', 'liso');
      expect(products).not.toBeNull();
      expect(products).not.toBeUndefined();
      expect(products.length).toBe(7);
    });
    it('sould return an array of Products filtred by name', async () => {
      const products = await service.findAll('FLEUR');
      expect(products).not.toBeNull();
      expect(products).not.toBeUndefined();
      expect(products.length).toBe(1);
    });
    it('sould return an array of Products filtred by tag', async () => {
      const products = await service.findAll(null, 'balada');
      expect(products).not.toBeNull();
      expect(products).not.toBeUndefined();
      expect(products.length).toBe(4);
    });
  });

  describe('findByIndex', () => {
    it('should return a Products', async () => {
      const index = 8371;
      const products = await service.findByIndex(index);
      expect(products).not.toBeNull();
      expect(products).not.toBeUndefined();
      expect(products.id).toBe(index);
    });
  });
});
