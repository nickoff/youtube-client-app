/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { NavigateService } from 'src/app/core/services/navigate/navigate.service';
import { SearchInputComponent } from './search-input.component';

describe('SearchInputComponent', () => {
  const initialState = '';
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;
  let store: MockStore;
  let navigateService: NavigateService;

  beforeEach(async () => {
    store = { dispatch: jest.fn() } as any;
    navigateService = { navigateToListPage: jest.fn() } as any;

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [SearchInputComponent],
      providers: [
        provideMockStore({ initialState }),
        { provide: NavigateService, useValue: navigateService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
    store.dispatch = jest.fn();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit input value and navigate to list page', () => {
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    inputElement.value = 'test';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(navigateService.navigateToListPage).toHaveBeenCalled();
  });

  it('should dispatch search action when input value length is greater than or equal to 3', (done) => {
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    inputElement.value = 'test';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    setTimeout(() => {
      expect(store.dispatch).toHaveBeenCalled();
      done();
    }, 500);
  });
});
