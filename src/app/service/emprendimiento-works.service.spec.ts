import { TestBed } from '@angular/core/testing';

import { EmprendimientoWorksService } from './emprendimiento-works.service';

describe('EmprendimientoWorksService', () => {
  let service: EmprendimientoWorksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmprendimientoWorksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
