import { TestBed, inject } from '@angular/core/testing';

import { ObservableObjService } from './observable-obj.service';

describe('ObservableObjService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObservableObjService]
    });
  });

  it('should be created', inject([ObservableObjService], (service: ObservableObjService) => {
    expect(service).toBeTruthy();
  }));
});
