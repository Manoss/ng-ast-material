import { TestBed } from '@angular/core/testing';

import { EvenementDataService } from './evenement-data.service';

describe('EvenementDataService', () => {
  let service: EvenementDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvenementDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
