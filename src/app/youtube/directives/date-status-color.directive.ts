import {
  AfterViewInit, Directive, ElementRef, Input, Renderer2
} from '@angular/core';

enum BottomBorderColors {
  Green = '#27AE60',
  Blue = '#2F80ED',
  Red = '#EB5757',
  Yellow = '#F2C94C'
}

export type SelectorName = 'backgroundColor' | 'borderColor';

@Directive({
  selector: '[appDateStatusColor]'
})
export class DateStatusBgColorDirective implements AfterViewInit {
  @Input() timeDiffMs = 0;
  @Input() selectorName!: SelectorName;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, this.selectorName, this.defineColor());
  }

  private defineColor(): string {
    const oneDayInMs = 24 * 60 * 60 * 1000;
    const sevenDaysInMs = oneDayInMs * 7;
    const oneMonthInMs = oneDayInMs * 30;
    const sixMonthsInMs = oneMonthInMs * 6;

    switch (true) {
      case this.timeDiffMs < sevenDaysInMs:
        return BottomBorderColors.Blue;
      case this.timeDiffMs < oneMonthInMs:
        return BottomBorderColors.Green;
      case this.timeDiffMs < sixMonthsInMs:
        return BottomBorderColors.Yellow;
      default:
        return BottomBorderColors.Red;
    }
  }
}
