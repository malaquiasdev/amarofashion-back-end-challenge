import { Test, TestingModule } from '@nestjs/testing';
import { RabittMqService } from './rabitt-mq.service';

describe('RabittMqService', () => {
  let service: RabittMqService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RabittMqService],
    }).compile();

    service = module.get<RabittMqService>(RabittMqService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
