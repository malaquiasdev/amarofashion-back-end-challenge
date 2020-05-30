import {
  Controller,
  Get,
  Header,
  Param,
  Query,
  Post,
  UseInterceptors,
  UploadedFile,
  HttpCode,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductsOutPutDot } from '../dto/products-out-put-dot';
import { ProductsService } from '../services/products.service';
import { ProductsUploadPipe } from './pipes/products.upload.pipe';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('rabbit/send')
  async rabInser(): Promise<any> {
    return this.productsService.rabInser();
  }

  @Get('rabbit/consumer')
  async rabCon(): Promise<any> {
    return this.productsService.rabCon();
  }

  @Post('upload')
  @HttpCode(202)
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file): Promise<any> {
    const products = new ProductsUploadPipe().transform(file, null);
    this.productsService.insertMany(products);
    return { processing: true };
  }

  @Get()
  @Header('Cache-Control', 'public, max-age=300')
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
  @Header('Cache-Control', 'public, max-age=300')
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
