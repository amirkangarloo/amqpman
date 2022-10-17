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
            name: `${process.env.RMQ_EXCHANGE_NAME}`,
            type: `${process.env.RMQ_EXCHANGE_TYPE}`,
          }
        ],
        connectionInitOptions: { wait: false, timeout: Number(`${process.env.RMQ_TIMEOUT}`) },
        uri: `${process.env.RMQ_HOST}`,
      }),
    }),
  ],
  controllers: [AmqpController],
  providers: [AmqpService]
})
export class AmqpModule {}
