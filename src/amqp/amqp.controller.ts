import { Body, Controller, Post } from '@nestjs/common';
import { BodyRequestDto } from '../common/dto';
import { AmqpService } from './amqp.service';


@Controller('amqp')
export class AmqpController {
    constructor(private readonly amqpService: AmqpService){}

    @Post('rpc')
    public async rpc(@Body() body:BodyRequestDto) {
        return await this.amqpService.rpc(body);
    }
}
