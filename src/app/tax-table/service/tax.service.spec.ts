import { TestBed, inject } from '@angular/core/testing';

import { TaxService } from './tax.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('TaxService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaxService],
      imports: [ HttpClientModule, FormsModule, ReactiveFormsModule ]
    });
  });

  it('should be created', inject([TaxService], (service: TaxService) => {
    expect(service).toBeTruthy();
  }));

});
