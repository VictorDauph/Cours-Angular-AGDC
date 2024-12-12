import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoOutputEnfantComponent } from './exo-output-enfant.component';

describe('ExoOutputEnfantComponent', () => {
  let component: ExoOutputEnfantComponent;
  let fixture: ComponentFixture<ExoOutputEnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoOutputEnfantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoOutputEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
