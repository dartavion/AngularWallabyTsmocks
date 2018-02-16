import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SwapiService } from './swapi.service';

describe('SwapiService', () => {
  let service: SwapiService,
    backend: HttpTestingController;

  beforeEach(() => {
    let bed = TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [SwapiService]
    });
    service = bed.get(SwapiService);
    backend = bed.get(HttpTestingController);
  });

  it('should be created', inject([SwapiService], (service: SwapiService) => {
    expect(service).toBeTruthy();
  }));

  it('gets star wars characters', () => {
    let characters = service.getCharacters();
    expect(service.getCharacters);
  });
});
