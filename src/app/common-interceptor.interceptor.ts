import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthserviceService } from './servie/authService/authservice.service';

@Injectable()
export class CommonInterceptorInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authService = this.injector.get(AuthserviceService)
    let token = request.clone({
      setHeaders: {
        Authorization: `Token ${authService.getToken()}`
      }
    })

    return next.handle(token);
  }
}
