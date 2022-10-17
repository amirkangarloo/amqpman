import { Body, Controller, Post } from '@nestjs/common';
import { BodyRequestDto } from '../common/dto';
import { AmqpService } from './amqp.service';


@Controller('amqp')
export class AmqpController {
    constructor(private readonly amqpService: AmqpService){}

    @Post('rpc')
    public async rpc(@Body() body:BodyRequestDto) {
        if (!body.exchange) body.exchange = `${process.env.RMQ_EXCHANGE_NAME}`;
        return await this.amqpService.rpc(body);
    }

    @Post('publish')
    public async publish(@Body() body:BodyRequestDto) {
        if (!body.exchange) body.exchange = `${process.env.RMQ_EXCHANGE_NAME}`;
        return await this.amqpService.publish(body);
    }
}
