import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPage } from './login-page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPage]
    })
<<<<<<< HEAD
      .compileComponents();
=======
    .compileComponents();
>>>>>>> 3eaf7edfffc809d644259dacfc29969faa8219ae

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> 3eaf7edfffc809d644259dacfc29969faa8219ae
