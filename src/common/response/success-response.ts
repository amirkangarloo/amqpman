import { BaseResponseInterface } from "../interface";

export class SuccessResponse implements BaseResponseInterface {
    statusCode: number;
    message: string;
    response?: any;
    constructor(statusCode:number, message: string, response?: any){
        this.statusCode = statusCode;
        this.message = message;
        this.response = response;
    }
}