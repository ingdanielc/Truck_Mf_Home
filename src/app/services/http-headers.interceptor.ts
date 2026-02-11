import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export const httpHeadersInterceptor: HttpInterceptorFn = (req, next) => {
  const modifiedReq = req.clone({
    headers: req.headers.set('X-API-KEY', environment.subscription),
  });
  return next(modifiedReq);
};
