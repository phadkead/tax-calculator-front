import {CanActivate} from '@angular/router';
import {TokenService} from './token.service';
import {Injectable} from '@angular/core';

@Injectable()
export class TokenAuthGuard implements CanActivate {

  constructor(private tokenService: TokenService) {
  }

  canActivate() {
    if (this.tokenService.isUserAuthenticated()) {
      return true;
    } else {
      window.alert('You don\'t have permission to view this page');
      return false;
    }
  }
}
