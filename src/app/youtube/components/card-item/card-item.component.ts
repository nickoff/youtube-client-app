import { Component, Input, OnChanges } from '@angular/core';
import { NavigateService } from 'src/app/core/services/navigate/navigate.service';
import { Store } from '@ngrx/store';
import { deleteCustomCard } from 'src/app/redux/custom-card';
import { addFavoriteCard, deleteFavoriteCard } from 'src/app/redux/favorite-card/favorite-card.action';
import { selectFavoriteCards } from 'src/app/redux/favorite-card/favorite-card.selector';
import { Observable, map, take } from 'rxjs';
import { SelectorName } from '../../directives/date-status-color.directive';
import { ActionModel, CardItemModel } from '../../../shared/models/card-item.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})

export class CardItemComponent implements OnChanges {
  ageInMs = 0;
  borderColor: SelectorName = 'borderColor';
  isFavorite$: Observable<boolean> = new Observable();

  constructor(
    private navigateService: NavigateService,
    private store: Store
  ) { }

  @Input() item?: CardItemModel;
  @Input() actions?: ActionModel[];

  ngOnChanges(): void {
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

  openVideoCard(id: string): void {
    if (!this.item) return;
    this.navigateService.navigateToVideo(id, this.item);
  }

  deleteCustomCard(id: string): void {
    this.store.dispatch(deleteCustomCard({ id }));
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
}
