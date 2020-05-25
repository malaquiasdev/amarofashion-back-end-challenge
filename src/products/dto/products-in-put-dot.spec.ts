import { ProductsInPutDot } from './products-in-put-dot';

describe('ProductsOutPutDot', () => {
  it('should be defined', () => {
    expect(new ProductsInPutDot()).toBeDefined();
  });
  it('should have the properties: index, name, tags', () => {
    const products = new ProductsInPutDot();
    expect(products).toHaveProperty('index', 0);
    expect(products).toHaveProperty('name', '');
    expect(products).toHaveProperty('tags', []);
  });
  it('should create a new product with a id value', () => {
    const product = new ProductsInPutDot({ index: 8371 });
    expect(product).toHaveProperty('index', 8371);
  });

  it('should create a new product with a name value', () => {
    const product = new ProductsInPutDot({ name: 'VESTIDO TRICOT CHEVRON' });
    expect(product).toHaveProperty('name', 'VESTIDO TRICOT CHEVRON');
  });

  it('should create a new product with a tags values', () => {
    const product = new ProductsInPutDot({
      tags: ['casual', 'metal', 'metal'],
    });
    expect(product).toHaveProperty('tags', ['casual', 'metal', 'metal']);
  });
});
