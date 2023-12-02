import { CustomCardStateModel } from './custom-card';
import { FavoriteCardStateModel } from './favorite-card/favorite-card.state';
import { SearchStateModel } from './search/search.state';
import { YouTubeAPIStateModel } from './youtube/youtube.state';

export interface State {
  youtubeCards: YouTubeAPIStateModel;
  searchQuery: SearchStateModel;
  customCards: CustomCardStateModel[];
  favoriteCards: FavoriteCardStateModel;
}
export { YouTubeAPIStateModel };

