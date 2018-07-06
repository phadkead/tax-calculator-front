import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor} from '@angular/common/http';
import {HttpRequest} from '@angular/common/http';
import {TokenService} from '../tax-table/service/token.service';
import {Observable} from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedRequest = req.clone({
      headers: req.headers.set(
        'X-SecretToken',
        this.tokenService.getSecretToken())
    });
    console.log('adding secret token header', clonedRequest.headers.keys());
    return next.handle(clonedRequest);
  }

}
