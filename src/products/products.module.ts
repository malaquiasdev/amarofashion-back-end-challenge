import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './controller/products.controller';
import { ProductsService } from './services/products.service';
import { ProductsSchema } from './services/produtcs.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Products', schema: ProductsSchema }]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}