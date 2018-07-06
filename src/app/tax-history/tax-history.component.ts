import {Component, OnInit} from '@angular/core';
import {TaxService} from '../tax-table/service/tax.service';

@Component({
  selector: 'app-tax-history',
  templateUrl: './tax-history.component.html',
  styleUrls: ['./tax-history.component.css']
})
export class TaxHistoryComponent implements OnInit {

  constructor(private taxService: TaxService) {
  }

  taxCalculationHistory: any;

  ngOnInit() {
    this.taxService.getTaxHistory().subscribe(res => {
      this.taxCalculationHistory = res;
      console.log(this.taxCalculationHistory);
    });
  }

}
