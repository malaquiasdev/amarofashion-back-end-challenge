import { Injectable, Logger, Inject } from '@nestjs/common';
import * as rabbitmq from 'amqplib';

@Injectable()
export class RabittMqService {
  private channel: any;
  constructor(@Inject('RABBIT_MQ_URL') private url: string) {
    this.channel = rabbitmq
      .connect(url)
      .then(connection => connection.createChannel())
      .error(err => Logger.error('RabbitMQ connection error: ', err));
  }

  async send(queueName: string, message: any) {
    this.channel.sendToQueue(queueName, Buffer.from(message));
    return true;
  }

  async consumer(queueName: string) {
    return this.channel.consume(queueName);
  }
}
