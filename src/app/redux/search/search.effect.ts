/* eslint-disable @ngrx/prefer-effect-callback-in-block-statement */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import * as YouTubeActions from '../youtube/youtube.action';
import { search } from './search.action';

@Injectable()
export class SearchEffect {
  constructor(private actions$: Actions) { }

  search$ = createEffect(() => this.actions$.pipe(
    ofType(search),
    map(() => YouTubeActions.loadYouTubeVideos()),
  ));
}
