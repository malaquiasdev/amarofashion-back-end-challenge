import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsOutPutDot } from './products-out-put-dot';
import { ProductsService } from './products.service';

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
          id: prod.id,
          name: prod.name,
          tags: prod.tags,
        }),
    );
  }

  @Get(':id')
  async findById(@Param('id') id): Promise<ProductsOutPutDot> {
    const prod = await this.productsService.findById(id);
    return new ProductsOutPutDot({
      id: prod.id,
      name: prod.name,
      tags: prod.tags,
    });
  }
}
