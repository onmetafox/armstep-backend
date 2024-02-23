import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from "rxjs";
@Injectable()
export class RequestHeaderInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();
        // if(request.body.token == "auth" ){
        //    request.header = config.requestHeader;
        // }else{
        //     request.header.authtoken = request.body.authtoken;
        // }
        // request.body = config.requestBody;
        
        return next.handle();
    }
}