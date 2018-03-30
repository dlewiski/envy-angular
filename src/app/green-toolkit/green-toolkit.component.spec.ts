import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenToolkitComponent } from './green-toolkit.component';

describe('GreenToolkitComponent', () => {
  let component: GreenToolkitComponent;
  let fixture: ComponentFixture<GreenToolkitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenToolkitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenToolkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
