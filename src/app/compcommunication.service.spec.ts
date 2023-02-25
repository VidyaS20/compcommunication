import { TestBed } from '@angular/core/testing';

import { CompcommunicationService } from './compcommunication.service';

describe('CompcommunicationService', () => {
  let service: CompcommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompcommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
