import { Module, DynamicModule } from '@nestjs/common';
import { RabittMqService } from './rabitt-mq.service';

@Module({})
export class RabittMqModule {
  static connect(url: string): DynamicModule {
    return {
      module: RabittMqModule,
      providers: [{ provide: 'RABBIT_MQ_URL', useValue: url }, RabittMqService],
      exports: [RabittMqService],
    };
  }
}
