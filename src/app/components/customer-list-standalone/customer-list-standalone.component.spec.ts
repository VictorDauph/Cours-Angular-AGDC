import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListStandaloneComponent } from './customer-list-standalone.component';

describe('CustomerListStandaloneComponent', () => {
  let component: CustomerListStandaloneComponent;
  let fixture: ComponentFixture<CustomerListStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerListStandaloneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerListStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
