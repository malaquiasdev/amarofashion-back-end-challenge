import * as mongoose from 'mongoose';
import { ProductsController } from './products.controller';
import { ProductsService } from '../services/products.service';
import { Products, ProductsSchema } from '../services/produtcs.model';
import { ProductsOutPutDot } from '../dto/products-out-put-dot';

describe('ProductsController', () => {
  let productsController: ProductsController;
  let productsService: ProductsService;
  let productsModel = null;

  const mockServiceResponse: Products[] = [
    {
      index: 8371,
      name: 'VESTIDO TRICOT CHEVRON',
      tags: ['balada', 'neutro', 'delicado', 'festa'],
    },
    {
      index: 8367,
      name: 'VESTIDO MOLETOM COM CAPUZ MESCLA',
      tags: ['casual', 'metal', 'metal'],
    },
    {
      index: 8363,
      name: 'VESTIDO CURTO MANGA LONGA LUREX',
      tags: ['colorido', 'metal', 'delicado', 'estampas', 'passeio'],
    },
  ];

  beforeEach(() => {
    productsModel = mongoose.model('Products', ProductsSchema);
    productsService = new ProductsService(productsModel);
    productsController = new ProductsController(productsService);
  });

  describe('findAll', () => {
    it('should return an array of ProductsDTO', async () => {
      const compare: ProductsOutPutDot[] = [
        {
          id: 8371,
          name: 'VESTIDO TRICOT CHEVRON',
          tags: ['balada', 'neutro', 'delicado', 'festa'],
        },
        {
          id: 8367,
          name: 'VESTIDO MOLETOM COM CAPUZ MESCLA',
          tags: ['casual', 'metal', 'metal'],
        },
        {
          id: 8363,
          name: 'VESTIDO CURTO MANGA LONGA LUREX',
          tags: ['colorido', 'metal', 'delicado', 'estampas', 'passeio'],
        },
      ];

      jest
        .spyOn(productsService, 'findAll')
        .mockImplementation(() => Promise.resolve(mockServiceResponse));

      expect(await productsController.findAll(null, null)).toEqual(compare);
    });
  });

  describe('findById', () => {
    it('should return a ProductsDTO', async () => {
      const compare: ProductsOutPutDot = {
        id: 8371,
        name: 'VESTIDO TRICOT CHEVRON',
        tags: ['balada', 'neutro', 'delicado', 'festa'],
      };

      jest
        .spyOn(productsService, 'findByIndex')
        .mockImplementation(() => Promise.resolve(mockServiceResponse[0]));

      expect(await productsController.findById(8371)).toEqual(compare);
    });

    it('should return a defautl ProductsDTO', async () => {
      const compare: ProductsOutPutDot = {
        id: 0,
        name: '',
        tags: [],
      };

      jest
        .spyOn(productsService, 'findByIndex')
        .mockImplementation(() => Promise.resolve(null));

      expect(await productsController.findById(8371)).toEqual(compare);
    });
  });
});
