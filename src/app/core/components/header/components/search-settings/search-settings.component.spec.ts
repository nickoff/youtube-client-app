import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSettingsComponent } from './search-settings.component';

describe('SearchSettingsComponent', () => {
  let component: SearchSettingsComponent;
  let fixture: ComponentFixture<SearchSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchSettingsComponent]
    });
    fixture = TestBed.createComponent(SearchSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
