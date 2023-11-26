import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsLoadingCustomCardList } from 'src/app/redux/custom-card/custom-card.selector';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  isLoadingCustomCardList$?:Observable<boolean>;
  isLoadingSearchResults = false;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.isLoadingCustomCardList$ = this.store.select(selectIsLoadingCustomCardList);
  }
}
