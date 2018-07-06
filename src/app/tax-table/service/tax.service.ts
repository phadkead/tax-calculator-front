import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaxService {

  BACKEND_URL: String = 'http://localhost:3000'; // TODO to put in a config

  constructor(private http: HttpClient) {
  }

  calculateTax(superAnnuation, grossWithSuper, gross, finyear) {
    const uri = this.BACKEND_URL + '/taxes/calculate';
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
