import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCardListComponent } from './custom-card-list.component';

describe('CustomCardListComponent', () => {
  let component: CustomCardListComponent;
  let fixture: ComponentFixture<CustomCardListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomCardListComponent]
    });
    fixture = TestBed.createComponent(CustomCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
