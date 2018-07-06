import { TestBed, inject } from '@angular/core/testing';
import {TokenService} from './token.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('TokenService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenService],
      imports: [ HttpClientModule, FormsModule, ReactiveFormsModule ]
    });
  });

  it('should be created', inject([TokenService], (service: TokenService) => {
    expect(service).toBeTruthy();
  }));

});
