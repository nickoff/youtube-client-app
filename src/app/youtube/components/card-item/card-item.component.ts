/* eslint-disable arrow-body-style */
import {
  ChangeDetectorRef, Component, DestroyRef, Input, OnChanges
} from '@angular/core';
import { NavigateService } from 'src/app/core/services/navigate/navigate.service';
import { Store } from '@ngrx/store';
import { CUSTOM_CARD_ACTIONS } from 'src/app/store/custom-card';
import { addFavoriteCard, deleteFavoriteCard } from 'src/app/store/favorite-card/favorite-card.action';
import { selectFavoriteCards } from 'src/app/store/favorite-card/favorite-card.selector';
import { Observable, map, take } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SelectorName } from '../../directives/date-status-color.directive';
import { ActionModel, CardItemModel } from '../../../shared/models/card-item.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})

export class CardItemComponent implements OnChanges {
  @Input() item?: CardItemModel;
  @Input() actions?: ActionModel[];

  ageInMs = 0;
  borderColor: SelectorName = 'borderColor';
  isFavorite$: Observable<boolean> = new Observable();

  constructor(
    private navigateService: NavigateService,
    private store: Store,
    private destroyRef: DestroyRef,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnChanges(): void {
    this.initComponent();
    this.isFavoriteCard(this.item?.id);
  }

  openVideoCard(id: string): void {
    if (!this.item) return;
    this.navigateService.navigateToVideo(id, this.item);
  }

  deleteCustomCard(id: string): void {
    this.store.dispatch(CUSTOM_CARD_ACTIONS.deleteCustomCard({ id }));
  }

  addToFavorites(): void {
    this.isFavorite$.pipe(take(1), takeUntilDestroyed(this.destroyRef)).subscribe(isFavorite => {
      if (!this.item) return;
      isFavorite
        ? this.store.dispatch(deleteFavoriteCard({ id: this.item.id }))
        : this.store.dispatch(addFavoriteCard({ favoriteCard: this.item }));
    });
  }

  private initComponent(): void {
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
  }

  private isFavoriteCard(id?: string): void {
    this.isFavorite$ = this.store.select(selectFavoriteCards).pipe(
      map(favoriteCards => {
        return this.item
          ? (favoriteCards.some(card => card.id === id))
          : false;
      })
    );
    this.cdr.markForCheck();
  }
}
