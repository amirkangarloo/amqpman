import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { BodyRequestDto } from '../common/dto';
import { AmqpService } from './amqp.service';


@Controller('amqp')
export class AmqpController {
    constructor(private readonly amqpService: AmqpService){}

    @Post('rpc')
    @HttpCode(HttpStatus.OK)
    public async rpc(@Body() body:BodyRequestDto) {
        return await this.amqpService.rpc(body);
    }

    @Post('publish')
    @HttpCode(HttpStatus.OK)
    public async publish(@Body() body:BodyRequestDto) {
        return await this.amqpService.publish(body);
    }
}
