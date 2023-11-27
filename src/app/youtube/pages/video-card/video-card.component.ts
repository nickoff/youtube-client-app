import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { deleteCustomCard } from 'src/app/redux/custom-card';
import { CardItemModel } from 'src/app/shared/models/card-item.model';
import { addFavoriteCard, deleteFavoriteCard } from 'src/app/redux/favorite-card/favorite-card.action';
import { selectFavoriteCards } from 'src/app/redux/favorite-card/favorite-card.selector';
import { Observable, map, take } from 'rxjs';
import { SelectorName } from '../../directives/date-status-color.directive';

type ActionModel = {
  name: string;
  count: string;
};

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent {
  item?: CardItemModel;
  ageInMs = 0;
  borderColor: SelectorName = 'borderColor';
  backgroundColor: SelectorName = 'backgroundColor';
  actions?: ActionModel[];
  isFavorite$: Observable<boolean> = new Observable();

  constructor(
    private router: Router,
    private location: Location,
    private store: Store
  ) {
    this.initComponent();
  }


  back(): void {
    this.location.back();
  }

  deleteCustomCard(id: string): void {
    this.store.dispatch(deleteCustomCard({ id }));
    this.location.back();
  }

  addToFavorites(): void {
    this.isFavorite$.pipe(take(1)).subscribe(isFavorite => {
      if (!this.item) return;
      if (isFavorite) {
        this.store.dispatch(deleteFavoriteCard({ id: this.item.id }));
      } else {
        this.store.dispatch(addFavoriteCard({ favoriteCard: this.item }));
      }
    });
  }

  private initComponent(): void {
    const navigation = this.router.getCurrentNavigation();
    this.item = navigation?.extras.state?.['item'];

    if (this.item && this.item && this.item.publishedAt) {
      this.ageInMs = Date.now() - Date.parse(this.item.publishedAt);
    }

    if (!this.item || !this.item.statistics) return;

    const {
      viewCount, likeCount, dislikeCount, commentCount
    } = this.item.statistics;

    this.actions = [
      { name: 'visibility', count: viewCount },
      { name: 'favorite', count: likeCount },
      { name: 'heart_broken', count: dislikeCount },
      { name: 'question_answer', count: commentCount }
    ];

    this.isFavorite$ = this.store.select(selectFavoriteCards).pipe(
      map(favoriteCards => {
        if (this.item) {
          return favoriteCards.some(card => card.id === this.item?.id);
        }
        return false;
      })
    );
  }
}
