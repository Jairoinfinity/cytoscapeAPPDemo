import { TestBed } from '@angular/core/testing';

import { LinkingserviceService } from './linkingservice.service';

describe('LinkingserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinkingserviceService = TestBed.get(LinkingserviceService);
    expect(service).toBeTruthy();
  });
});
