import { TestBed } from '@angular/core/testing';

import { ListappointmentsService } from './listappointments.service';

describe('ListappointmentsService', () => {
  let service: ListappointmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListappointmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
