import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authGuard } from './auth-guard';

describe('authGuard', () => {
<<<<<<< HEAD
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authGuard(...guardParameters));
=======
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authGuard(...guardParameters));
>>>>>>> 3eaf7edfffc809d644259dacfc29969faa8219ae

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> 3eaf7edfffc809d644259dacfc29969faa8219ae
