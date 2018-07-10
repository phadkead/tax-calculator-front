import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private SECRET_TOKEN = 'WeWouldLoveToWorkForYou'; // not so secret...

  getSecretToken(): string {
    return this.SECRET_TOKEN;
  }

  isUserAuthenticated(): boolean {
    return true;
  }

}
