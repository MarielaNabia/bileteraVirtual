import { TestBed } from '@angular/core/testing';

import { MibilleteraService } from './mibilletera.service';

describe('MibilleteraService', () => {
  let service: MibilleteraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MibilleteraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
