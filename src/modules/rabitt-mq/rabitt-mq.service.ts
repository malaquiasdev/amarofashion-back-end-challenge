import { Injectable, Logger, Inject } from '@nestjs/common';
import * as rabbitmq from 'amqplib';

@Injectable()
export class RabittMqService {
  private channel: any;
  constructor(@Inject('RABBIT_MQ_URL') private url: string) {
    rabbitmq
      .connect(url)
      .then(connection =>
        connection
          .createChannel()
          .then(channel => (this.channel = channel))
          .catch(err => Logger.error('RabbitMQ channel error: ', err)),
      )
      .error(err => Logger.error('RabbitMQ connection error: ', err));
  }

  send(queueName: string, message: any) {
    this.channel.assertQueue(queueName);
    this.channel.sendToQueue(queueName, Buffer.from(message));
    return true;
  }

  async consumer(queueName: string) {
    let mensagem = '';
    this.channel.assertQueue(queueName);
    await this.channel.consume(queueName, function(msg) {
      console.log(' [x] Received %s', msg.content.toString());
      mensagem = msg.content.toString();
    });
    return mensagem;
  }
}
