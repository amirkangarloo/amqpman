import { BodyRequestDto } from "../dto";
import { ErrorResponse, SuccessResponse } from "../response";

export interface AmqpInterface {
    rpc: (body: BodyRequestDto) => Promise<SuccessResponse | ErrorResponse>;
    publish: (body: BodyRequestDto) => Promise<SuccessResponse | ErrorResponse>;
}