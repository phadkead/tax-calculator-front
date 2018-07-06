import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {TaxService} from './service/tax.service';

@Component({
  selector: 'app-tax-table',
  templateUrl: './tax-table.component.html',
  styleUrls: ['./tax-table.component.css']
})
export class TaxTableComponent implements OnInit {

  angForm: FormGroup;
  calculatedData: any;

  constructor(private taxService: TaxService, private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  createForm() {
    this.angForm = this.fb.group({
      superPercentage: ['', Validators.required],
      grossWithSuper: ['', Validators.required],
      gross: ['', Validators.required],
      finyear: ['', Validators.required]
    });
  }

  calculateTax(superAnnuation, grossWithSuper, gross, finyear) {
    this.taxService.calculateTax(superAnnuation, grossWithSuper, gross, finyear).subscribe(res => {
      this.calculatedData = res;
    });
  }
}
