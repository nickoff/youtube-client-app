import { Component, Input, OnChanges } from '@angular/core';
import { NavigateService } from 'src/app/core/services/navigate/navigate.service';
import { SelectorName } from '../../directives/date-status-color.directive';
import { ActionModel, CardItemModel } from './card-item.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})

export class CardItemComponent implements OnChanges {
  ageInMs = 0;
  borderColor: SelectorName = 'borderColor';

  constructor(
    private navigateService: NavigateService,
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
  }

  openVideoCard(id: string): void {
    this.navigateService.navigateToVideo(id);
  }
}
