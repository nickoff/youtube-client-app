import { createAction, props } from "@ngrx/store";
import { CardItem } from "src/app/youtube/models";
import { YOUTUBE_TYPES } from "./youtube.types";

export const loadYouTubeVideos = createAction(YOUTUBE_TYPES.LOAD_YOUTUBE_VIDEOS);
export const loadYouTubeVideosSuccess = createAction(
  YOUTUBE_TYPES.LOAD_YOUTUBE_VIDEOS_SUCCESS,
  props<{ newVideosList: CardItem[] }>()
);
export const loadYouTubeVideosFailure = createAction(
  YOUTUBE_TYPES.LOAD_YOUTUBE_VIDEOS_FAILURE,
  props<{ error: unknown }>()
);
