import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFormTemplateDrivenComponent } from './customer-form-template-driven.component';

describe('CustomerFormTemplateDrivenComponent', () => {
  let component: CustomerFormTemplateDrivenComponent;
  let fixture: ComponentFixture<CustomerFormTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerFormTemplateDrivenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerFormTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
