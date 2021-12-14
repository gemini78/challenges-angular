import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDonkeyComponent } from './user-donkey.component';

describe('UserDonkeyComponent', () => {
  let component: UserDonkeyComponent;
  let fixture: ComponentFixture<UserDonkeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDonkeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDonkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
