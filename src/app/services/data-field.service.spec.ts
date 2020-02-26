import { TestBed } from '@angular/core/testing';

import { DataFieldService } from './data-field.service';

describe('DataFieldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataFieldService = TestBed.get(DataFieldService);
    expect(service).toBeTruthy();
  });
});
