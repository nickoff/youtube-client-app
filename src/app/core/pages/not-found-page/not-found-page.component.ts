import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NOT_FOUND_PAGE_ICON } from '../../../youtube/constants/svg-icons';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('not-found-page-icon', sanitizer.bypassSecurityTrustHtml(NOT_FOUND_PAGE_ICON));
  }
}
