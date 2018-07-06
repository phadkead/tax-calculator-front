import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxHistoryComponent } from './tax-history.component';

describe('TaxHistoryComponent', () => {
  let component: TaxHistoryComponent;
  let fixture: ComponentFixture<TaxHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
