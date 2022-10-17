import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AmqpController } from './amqp.controller';
import { AmqpService } from './amqp.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    RabbitMQModule.forRootAsync(RabbitMQModule, {
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => ({
        exchanges: [
          {
            name: 'services',
            type: 'topic',
          },
          {
            name: 'broadcast',
            type: 'fanout',
          },
        ],
        connectionInitOptions: { wait: false, timeout: 20000 },
        uri: `${process.env.RMQ_HOST}`,
      }),
    }),
  ],
  controllers: [AmqpController],
  providers: [AmqpService]
})
export class AmqpModule {}
