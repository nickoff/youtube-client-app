/* eslint-disable max-len */
import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SEARCH_SETTINGS_ICON } from '../../constants/svg-icon';



@Component({
  selector: 'app-search-settings',
  templateUrl: './search-settings.component.html',
  styleUrls: ['./search-settings.component.scss']
})
export class SearchSettingsComponent {
  @Output() buttonClick = new EventEmitter<void>();

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('search-settings-icon', sanitizer.bypassSecurityTrustHtml(SEARCH_SETTINGS_ICON));
  }

  showComponent(): void {
    this.buttonClick.emit();
  }
}
