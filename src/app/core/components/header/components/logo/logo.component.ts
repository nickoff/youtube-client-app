/* eslint-disable max-len */
import { Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { YOUTUBE_ICON } from '../../constants/svg-icon';



@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  standalone: true,
  imports: [MatIconModule]
})
export class LogoComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('youtube-icon', sanitizer.bypassSecurityTrustHtml(YOUTUBE_ICON));
  }
}
