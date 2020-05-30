import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { RabittMqModule } from './modules/rabitt-mq/rabitt-mq.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongodb/amarofashion'),
    ProductsModule,
    RabittMqModule.connect('amqp://localhost:5672'),
  ],
})
export class AppModule {}
