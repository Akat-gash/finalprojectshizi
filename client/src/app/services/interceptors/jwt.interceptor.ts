// tslint:disable-next-line:quotemark
import {Injectable} from "@angular/core";
// tslint:disable-next-line:quotemark
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
// tslint:disable-next-line:quotemark
import {AuthService} from "../auth.service";
// tslint:disable-next-line:quotemark
import {Observable} from "rxjs";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.authService.currentUserValue;
    // tslint:disable-next-line:no-string-literal
    if (currentUser && currentUser['access_token']) {
      req = req.clone({
        setHeaders: {
          // tslint:disable-next-line:no-string-literal
          'X-Access-Token': currentUser['access_token']
        }
      });
    }
    return next.handle(req);
  }


}
