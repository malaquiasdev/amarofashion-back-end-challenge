import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RabittMqModule } from '../modules/rabitt-mq/rabitt-mq.module';
import { ProductsController } from './controller/products.controller';
import { ProductsService } from './services/products.service';
import { ProductsSchema, tableName } from './produtcs.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: tableName, schema: ProductsSchema }]),
    RabittMqModule.connect('amqp://guest:guest@http://localhost:15672'),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
