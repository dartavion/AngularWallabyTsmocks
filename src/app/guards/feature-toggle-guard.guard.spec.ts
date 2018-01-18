import { TestBed, async, inject } from '@angular/core/testing';

import { FeatureToggleGuardGuard } from './feature-toggle-guard.guard';

describe('FeatureToggleGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeatureToggleGuardGuard]
    });
  });

  it('should ...', inject([FeatureToggleGuardGuard], (guard: FeatureToggleGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
