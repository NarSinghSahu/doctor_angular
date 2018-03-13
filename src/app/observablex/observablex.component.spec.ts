import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablexComponent } from './observablex.component';

describe('ObservablexComponent', () => {
  let component: ObservablexComponent;
  let fixture: ComponentFixture<ObservablexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
