import { TestBed } from '@angular/core/testing';

import { EstadisticaDiariaService } from './estadistica-diaria.service';

describe('EstadisticaDiariaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstadisticaDiariaService = TestBed.get(EstadisticaDiariaService);
    expect(service).toBeTruthy();
  });
});
