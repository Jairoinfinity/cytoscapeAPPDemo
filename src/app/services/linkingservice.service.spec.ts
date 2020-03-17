import { TestBed } from '@angular/core/testing';

import { LinkingService } from './linkingservice.service';

describe('LinkingserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinkingService = TestBed.get(LinkingService);
    expect(service).toBeTruthy();
  });
});
