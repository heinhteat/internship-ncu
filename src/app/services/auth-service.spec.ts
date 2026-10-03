import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth-service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> 3eaf7edfffc809d644259dacfc29969faa8219ae
