import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { HttpStatus, Injectable } from '@nestjs/common';
import { BodyRequestDto } from '../common/dto';
import { AmqpInterface } from '../common/interface';
import { ErrorResponse, SuccessResponse } from '../common/response';

@Injectable()
export class AmqpService implements AmqpInterface {
    constructor(private readonly rmq: AmqpConnection){}

    public async rpc(body: BodyRequestDto):Promise<SuccessResponse | ErrorResponse> {
        try {
            const { exchange, payload, routingKey} = body;            
            const data = await this.rmq.request({exchange, routingKey, payload});
            return new SuccessResponse(HttpStatus.OK, 'RPC is success', data);
        } catch (error) {
            console.log(error);
            throw new ErrorResponse(HttpStatus.SERVICE_UNAVAILABLE, error.message);
        }
    }

    public async publish(body: BodyRequestDto):Promise<SuccessResponse | ErrorResponse> {
        try {
            const {exchange, payload, routingKey} = body;
            await this.rmq.publish(exchange, routingKey, payload);
            return new SuccessResponse(HttpStatus.OK, 'Publish is success');
        } catch (error) {
            console.log(error);
            throw new ErrorResponse(HttpStatus.SERVICE_UNAVAILABLE, error.message);
        }
    }
}
