import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoOutputParentComponent } from './exo-output-parent.component';

describe('ExoOutputParentComponent', () => {
  let component: ExoOutputParentComponent;
  let fixture: ComponentFixture<ExoOutputParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoOutputParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoOutputParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
