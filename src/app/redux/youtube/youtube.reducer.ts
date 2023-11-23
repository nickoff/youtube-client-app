import { createReducer, on } from "@ngrx/store";
import { YouTubeAPIStateModel, InitialYouTubeAPIState } from "./youtube-state.model";
import * as YoutubeActions from "./youtube.action";

export const youTubeApiReducer = createReducer<YouTubeAPIStateModel>(
  InitialYouTubeAPIState,
  on(YoutubeActions.loadYouTubeVideos, (state): YouTubeAPIStateModel => ([...state])),
  on(
    YoutubeActions.loadYouTubeVideosSuccess,
    (_state, { newVideosList }): YouTubeAPIStateModel => ([...newVideosList])
  ),
  on(YoutubeActions.loadYouTubeVideosFailure, (state): YouTubeAPIStateModel => ([...state]))
);
