import { TestBed } from '@angular/core/testing';

import { UploadExcelService } from './upload-excel.service';

describe('UploadExcelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadExcelService = TestBed.get(UploadExcelService);
    expect(service).toBeTruthy();
  });
});
