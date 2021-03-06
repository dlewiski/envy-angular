import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenScoreComponent } from './green-score.component';

describe('GreenScoreComponent', () => {
  let component: GreenScoreComponent;
  let fixture: ComponentFixture<GreenScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
