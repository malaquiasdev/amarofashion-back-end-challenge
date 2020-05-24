import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsOutPutDot } from '../dto/products-out-put-dot';
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async findAll(
    @Query('name') name: string,
    @Query('tag') tag: string,
  ): Promise<Array<ProductsOutPutDot>> {
    return (await this.productsService.findAll(name, tag)).map(
      prod =>
        new ProductsOutPutDot({
          id: prod.index,
          name: prod.name,
          tags: prod.tags,
        }),
    );
  }

  @Get(':id')
  async findById(@Param('id') id): Promise<ProductsOutPutDot> {
    const prod = await this.productsService.findByIndex(id);
    if (prod) {
      return new ProductsOutPutDot({
        id: prod.index,
        name: prod.name,
        tags: prod.tags,
      });
    }
    return new ProductsOutPutDot();
  }
}
