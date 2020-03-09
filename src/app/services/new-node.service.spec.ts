import { TestBed } from '@angular/core/testing';

import { NewNodeService } from './new-node.service';

describe('NewNodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewNodeService = TestBed.get(NewNodeService);
    expect(service).toBeTruthy();
  });
});
