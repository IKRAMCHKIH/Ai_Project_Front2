import { TestBed, inject } from '@angular/core/testing';

import { DisplayOffServiceService } from './display-off-service.service';

describe('DisplayOffServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplayOffServiceService]
    });
  });

  it('should be created', inject([DisplayOffServiceService], (service: DisplayOffServiceService) => {
    expect(service).toBeTruthy();
  }));
});
