import { BaseResponseInterface } from "../interface";

export class ErrorResponse implements BaseResponseInterface {
    statusCode: number;
    message: string;
    constructor(statusCode:number, message: string){
        this.statusCode = statusCode;
        this.message = message;
    }
}