import { ProductsOutPutDot } from './products-out-put-dot';

describe('ProductsOutPutDot', () => {
  it('should be defined', () => {
    expect(new ProductsOutPutDot()).toBeDefined();
  });
  it('should have the properties: id, name, tags', () => {
    const products = new ProductsOutPutDot();
    expect(products).toHaveProperty('id', 0);
    expect(products).toHaveProperty('name', '');
    expect(products).toHaveProperty('tags', []);
  });
  it('should create a new product with a id value', () => {
    const product = new ProductsOutPutDot({ id: 8371 });
    expect(product).toHaveProperty('id', 8371);
  });

  it('should create a new product with a name value', () => {
    const product = new ProductsOutPutDot({ name: 'VESTIDO TRICOT CHEVRON' });
    expect(product).toHaveProperty('name', 'VESTIDO TRICOT CHEVRON');
  });

  it('should create a new product with a tags values', () => {
    const product = new ProductsOutPutDot({
      tags: ['casual', 'metal', 'metal'],
    });
    expect(product).toHaveProperty('tags', ['casual', 'metal', 'metal']);
  });
});
