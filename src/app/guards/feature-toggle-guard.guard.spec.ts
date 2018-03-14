import { TestBed, async, inject } from '@angular/core/testing';

import { FeatureToggleGuardGuard } from './feature-toggle-guard.guard';
import { SwapiService } from '../services/swapi.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FeatureToggleGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [FeatureToggleGuardGuard, SwapiService]
    });
  });

  it('should ...', inject([FeatureToggleGuardGuard], (guard: FeatureToggleGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
