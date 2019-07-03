import { TestBed } from '@angular/core/testing';

import { AddprescriptionService } from './shared/services/addprescription.service';

describe('AddprescriptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddprescriptionService = TestBed.get(AddprescriptionService);
    expect(service).toBeTruthy();
  });
});
