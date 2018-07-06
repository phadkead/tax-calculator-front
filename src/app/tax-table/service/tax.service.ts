import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TaxService {

  constructor(private http: HttpClient) {
  }

  calculateTax(superAnnuation, grossWithSuper, gross, finyear) {
    const uri = 'http://localhost:3000/taxes/calculate';
    const data = {
      superAnnuation,
      grossWithSuper,
      gross,
      finyear,
    };
    console.log('posting data from service:' + data);

    return this.http.post(uri, data);
  }
}
