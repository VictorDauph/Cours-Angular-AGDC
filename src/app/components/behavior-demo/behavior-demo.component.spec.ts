import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorDemoComponent } from './behavior-demo.component';

describe('BehaviorDemoComponent', () => {
  let component: BehaviorDemoComponent;
  let fixture: ComponentFixture<BehaviorDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviorDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
