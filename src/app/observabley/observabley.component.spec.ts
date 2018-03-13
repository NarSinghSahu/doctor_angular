import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableyComponent } from './observabley.component';

describe('ObservableyComponent', () => {
  let component: ObservableyComponent;
  let fixture: ComponentFixture<ObservableyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
