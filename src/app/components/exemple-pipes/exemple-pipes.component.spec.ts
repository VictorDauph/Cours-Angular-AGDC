import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplePipesComponent } from './exemple-pipes.component';

describe('ExemplePipesComponent', () => {
  let component: ExemplePipesComponent;
  let fixture: ComponentFixture<ExemplePipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemplePipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemplePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
