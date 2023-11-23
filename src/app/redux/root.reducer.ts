import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { State } from "./root-state.models";
import { searchReducer } from "./search/search.reducer";
import { youTubeApiReducer } from "./youtube/youtube.reducer";
import { customCardReducer } from "./custom-card/custom-card.reducer";

const reducers: ActionReducerMap<State> = {
  youtubeCards: youTubeApiReducer,
  searchQuery: searchReducer,
  customCards: customCardReducer
};

const metaReducers: MetaReducer<State>[] = [];

export { reducers, metaReducers };
