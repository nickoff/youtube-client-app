import { CustomCardStateModel } from './custom-card';
import { FavoriteCardStateModel } from './favorite-card/favorite-card.model';
import { SearchStateModel } from './search/search-state.model';
import { YouTubeAPIStateModel } from './youtube/youtube-state.model';

export interface State {
  youtubeCards: YouTubeAPIStateModel;
  searchQuery: SearchStateModel;
  customCards: CustomCardStateModel[];
  favoriteCards: FavoriteCardStateModel;
}
export { YouTubeAPIStateModel };

