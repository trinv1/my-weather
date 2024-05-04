import { TestBed } from '@angular/core/testing';

import { GalweatherService } from './galweather.service';

describe('GalweatherService', () => {
  let service: GalweatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalweatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
