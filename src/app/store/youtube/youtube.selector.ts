import { MemoizedSelector, createFeatureSelector, createSelector } from "@ngrx/store";
import { CardItem } from "src/app/youtube/models";
import { YouTubeAPIStateModel } from "./youtube.state";

const selectYoutubeStore = createFeatureSelector<YouTubeAPIStateModel>('youtubeCards');

export const selectVideosInfo = createSelector(
  selectYoutubeStore,
  (state) => state.map(item => ({ ...item }))
);

export const selectVideoById = (
  id: string
): MemoizedSelector<object, CardItem | undefined> => createSelector(
  selectYoutubeStore,
  (state) => state.find(item => item.id === id)
);
