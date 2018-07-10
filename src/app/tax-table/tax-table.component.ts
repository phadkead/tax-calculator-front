import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {TaxService} from './service/tax.service';

@Component({
  selector: 'app-tax-table',
  templateUrl: './tax-table.component.html',
  styleUrls: ['./tax-table.component.css']
})
export class TaxTableComponent implements OnInit {

  myform: FormGroup;
  calculatedData: any;
  superPercentage: FormControl;
  grossWithSuper: FormControl;
  gross: FormControl;
  finyear: FormControl;

  constructor(private taxService: TaxService) {
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createForm() {
    this.myform = new FormGroup({
      gross: this.gross,
      grossWithSuper: this.grossWithSuper,
      finyear: this.finyear,
      superPercentage: this.superPercentage,
    });
  }

  createFormControls() {
    this.gross = new FormControl('');
    this.grossWithSuper = new FormControl('');
    this.finyear = new FormControl('', [Validators.required]);
    this.superPercentage = new FormControl('', Validators.required);
  }

  calculateTax(superAnnuation, grossWithSuper, gross, finyear) {
    this.taxService.calculateTax(superAnnuation, grossWithSuper, gross, finyear).subscribe(res => {
      this.calculatedData = res;
    });
  }
}
