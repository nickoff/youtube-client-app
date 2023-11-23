import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginIconComponent } from './login-icon.component';

describe('LoginIconComponen', () => {
  let component: LoginIconComponent;
  let fixture: ComponentFixture<LoginIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginIconComponent]
    });
    fixture = TestBed.createComponent(LoginIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
