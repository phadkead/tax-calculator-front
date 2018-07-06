import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxTableComponent } from './tax-table.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('TaxTableComponent', () => {
  let component: TaxTableComponent;
  let fixture: ComponentFixture<TaxTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxTableComponent ],
      imports: [ HttpClientModule, FormsModule, ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
