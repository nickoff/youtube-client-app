import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { By } from '@angular/platform-browser';
import { NotFoundPageComponent } from './not-found-page.component';

describe('NotFoundPageComponent', () => {
  let component: NotFoundPageComponent;
  let fixture: ComponentFixture<NotFoundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFoundPageComponent],
      imports: [MatIconTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display not found message', () => {
    const de = fixture.debugElement.query(By.css('p'));
    const el = de.nativeElement;
    expect(el.textContent).toContain('Sorry, smth went wrong((');
  });

  it('should display not found icon', () => {
    const de = fixture.debugElement.query(By.css('mat-icon'));
    const el = de.nativeElement;
    expect(el.getAttribute('svgicon')).toBe('not-found-page-icon');
  });
});
