import { HttpInterceptorFn } from '@angular/common/http';
import { AccountService } from '../_services/account.service';
import { inject } from '@angular/core';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const accountSevice = inject(AccountService);
  
  if (accountSevice.currentUser()){
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${accountSevice.currentUser()?.token}`
      }
    })
  }
  
  return next(req);
};
