import { Component } from '@angular/core';
import { SortCountOfViewService } from 'src/app/youtube/services/sort-count-of-view/sort-count-of-view.service';
import { SortDateService } from 'src/app/youtube/services/sort-data/sort-data.service';
import { SortByWordService } from 'src/app/youtube/services/sort-word/sort-by-word.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showComponent = false;
  inputValue = '';

  navMenuList = [
    { name: 'Main', link: 'list-page' },
    { name: 'Favorites', link: 'favorites' },
    { name: 'Admin', link: 'auth/admin' },
  ];

  constructor(
    private sortDateService: SortDateService,
    private sortCountOfViewService: SortCountOfViewService,
    private sortByWordService: SortByWordService,
  ) {}

  sortData(): void {
    this.sortDateService.toggleSortOrder();
  }

  sortCountOfView(): void {
    this.sortCountOfViewService.toggleSortOrder();
  }

  sortByWord(): void {
    this.sortByWordService.setData(this.inputValue);
  }
}
