import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectVideoById } from 'src/app/redux/youtube/youtube.selector';
import { CardItem } from '../../models';
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
  item?: CardItem;
  ageInMs = 0;
  borderColor: SelectorName = 'borderColor';
  backgroundColor: SelectorName = 'backgroundColor';
  actions?: ActionModel[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store
  ) {
    this.route.params
      .pipe(
        switchMap(
          data => this.store.select(selectVideoById(data['id']))
        ),
        take(1)
      ).subscribe((item?: CardItem) => {
        this.item = item;

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
      });
  }


  back(): void {
    this.location.back();
  }
}
