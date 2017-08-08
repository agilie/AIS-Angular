import {Injectable} from "@angular/core";
import {HttpInterceptor} from "@angular/common/http";

@Injectable()
export class Tokenizer implements HttpInterceptor{

    intercept(req: any, next: any): any {

        if (req.url.includes('post')) {
            const clone = req.clone({
                headers: req.headers.set('token', 'cool user token')
            });
            return next.handle(clone);
        } else {
            return next.handle(req);
        }
    }

}