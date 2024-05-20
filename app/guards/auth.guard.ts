import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

let _Roter=inject(Router);

  if(localStorage.getItem('token')!=null)
    {
      return true;
    }
    _Roter.navigate(["/Login"]);
return false;
};
