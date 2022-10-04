import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouletteResultsComponent } from './roulette-results.component';

describe('RouletteResultsComponent', () => {
  let component: RouletteResultsComponent;
  let fixture: ComponentFixture<RouletteResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouletteResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouletteResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
