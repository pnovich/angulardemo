import { TestBed } from '@angular/core/testing';

import { PersonmockService } from './personmock.service';

describe('PersonService', () => {
  let service: PersonmockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonmockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
