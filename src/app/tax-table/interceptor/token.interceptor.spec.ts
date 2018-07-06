import {TestBed, inject} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';

import {TokenInterceptor} from './token.interceptor';

describe('TokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }]
  }));

  describe('intercept HTTP requests', () => {
    it('should add X-SecretToken to Headers', inject([HttpClient, HttpTestingController],
      (http: HttpClient, mock: HttpTestingController) => {

        http.get('/whatever').subscribe(response => expect(response).toBeTruthy());
        const request = mock.expectOne(req => (req.headers.has('X-SecretToken')
          && req.headers.get('X-SecretToken') === 'WeWouldLoveToWorkForYou'));

        request.flush({data: 'test'});
        mock.verify();
      }));
  });

  afterEach(inject([HttpTestingController], (mock: HttpTestingController) => {
    mock.verify();
  }));
});
