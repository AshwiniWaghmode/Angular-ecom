import { CanActivateFn } from '@angular/router';


export const authGuard: CanActivateFn = (route) => {

  if (localStorage.getItem('seller')) {
    return true;

  return true;
}
}
