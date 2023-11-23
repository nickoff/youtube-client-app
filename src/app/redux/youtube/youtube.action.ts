import { createAction, props } from "@ngrx/store";
import { CardItem } from "src/app/youtube/models";

export const loadYouTubeVideos = createAction('[YouTube/API] Load YouTube Videos');
export const loadYouTubeVideosSuccess = createAction(
  '[YouTube/API] Load YouTube Videos Success',
  props<{ newVideosList: CardItem[] }>()
);
export const loadYouTubeVideosFailure = createAction(
  '[YouTube/API] Load YouTube Videos Failure',
  props<{ error: unknown }>()
);
