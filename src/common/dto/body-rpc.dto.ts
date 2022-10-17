import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class BodyRequestDto {
    @IsString()
    @IsNotEmpty()
    routingKey: string;

    @IsNotEmpty()
    payload: any;

    @IsString()
    @IsOptional()
    readonly exchange?: string = `${process.env.RMQ_EXCHANGE_NAME}`;
}