import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  findAll(@Query('name') name: string, @Query('tag') tag: string): string {
    return 'find all';
  }

  @Get(':id')
  findById(
    @Param('id') id: number,
    @Query('name') name: string,
    @Query('tag') tag: string,
  ): string {
    return 'findById';
  }
}
