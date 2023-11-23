/* eslint-disable @ngrx/prefer-effect-callback-in-block-statement */
import { Injectable } from '@angular/core';
import {
  Actions, createEffect, ofType, concatLatestFrom
} from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { YoutubeApiService } from 'src/app/youtube/services/api/youtube-api.service';
import { Store } from '@ngrx/store';
import * as YouTubeActions from './youtube.action';
import { selectSearchQueryValue } from '../search/search.selector';


@Injectable()
export class YouTubeEffect {
  constructor(
    private actions$: Actions,
    private youTubeApiService: YoutubeApiService,
    private store: Store
  ) { }

  youTubeVideos$ = createEffect(() => this.actions$.pipe(
    ofType(YouTubeActions.loadYouTubeVideos),
    concatLatestFrom(() => this.store.select(selectSearchQueryValue)),
    switchMap(([, searchQuery]) => this.youTubeApiService.getVideosInfo(searchQuery).pipe(
      map((videosList) => YouTubeActions.loadYouTubeVideosSuccess({ newVideosList: videosList })),
    ))
  ));
}
