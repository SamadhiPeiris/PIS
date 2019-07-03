import { TestBed } from '@angular/core/testing';

import { MltService } from './mlt.service';

describe('MltService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MltService = TestBed.get(MltService);
    expect(service).toBeTruthy();
  });
});
