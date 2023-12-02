import { createReducer, on } from "@ngrx/store";
import { YouTubeAPIStateModel, InitialYouTubeAPIState, YOUTUBE_ACTIONS } from "./index";

export const youTubeApiReducer = createReducer<YouTubeAPIStateModel>(
  InitialYouTubeAPIState,
  on(YOUTUBE_ACTIONS.loadYouTubeVideos, (state): YouTubeAPIStateModel => ([...state])),
  on(
    YOUTUBE_ACTIONS.loadYouTubeVideosSuccess,
    (_state, { newVideosList }): YouTubeAPIStateModel => ([...newVideosList])
  ),
  on(YOUTUBE_ACTIONS.loadYouTubeVideosFailure, (state): YouTubeAPIStateModel => ([...state]))
);
