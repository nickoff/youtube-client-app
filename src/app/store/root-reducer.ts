import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { State } from "./root-state";
import { searchReducer } from "./search/search.reducer";
import { youTubeApiReducer } from "./youtube/youtube.reducer";
import { customCardReducer } from "./custom-card/custom-card.reducer";
import { favoriteCardReducer } from "./favorite-card/favorite-card.reducer";

const reducers: ActionReducerMap<State> = {
  youtubeCards: youTubeApiReducer,
  searchQuery: searchReducer,
  customCards: customCardReducer,
  favoriteCards: favoriteCardReducer
};

const metaReducers: MetaReducer<State>[] = [];

export { reducers, metaReducers };
