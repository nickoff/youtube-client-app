import { Component, Input, OnChanges } from '@angular/core';
import { NavigateService } from 'src/app/core/sevices/navigate/navigate.service';
import { CardItem } from '../../models';
import { SelectorName } from '../../directives/date-status-color.directive';

type ActionModel = {
  name: string;
  count: string;
};

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

  @Input() item?: CardItem;
  @Input() actions: ActionModel[] = [];

  ngOnChanges(): void {
    if (this.item && this.item.snippet && this.item.snippet.publishedAt) {
      this.ageInMs = Date.now() - Date.parse(this.item.snippet.publishedAt);
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
