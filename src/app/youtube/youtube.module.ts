import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { SortByDatePipe } from './pipes/sort-by-date/sort-by-date.pipe';
import { SortByCountOfViewPipe } from './pipes/sort-by-count/sort-by-count-of-view.pipe';
import { SortByWordPipe } from './pipes/sort-by-word/sort-by-word.pipe';
import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { NotFoundPageComponent } from '../core/pages/not-found-page/not-found-page.component';
import { VideoCardComponent } from './pages/video-card/video-card.component';
import { DateStatusBgColorDirective } from './directives/date-status-color.directive';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { CustomCardListComponent } from './components/custom-card-list/custom-card-list.component';


@NgModule({
  declarations: [
    SearchResultsComponent,
    CardItemComponent,
    DateStatusBgColorDirective,
    SortByDatePipe,
    SortByCountOfViewPipe,
    SortByWordPipe,
    NotFoundPageComponent,
    VideoCardComponent,
    ListPageComponent,
    CustomCardListComponent,
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    SearchResultsComponent
  ]
})
export class YoutubeModule { }
