import { CustomCardStateModel } from './custom-card';
import { SearchStateModel } from './search/search-state.model';
import { YouTubeAPIStateModel } from './youtube/youtube-state.model';

export interface State {
  youtubeCards: YouTubeAPIStateModel;
  searchQuery: SearchStateModel;
  customCards: CustomCardStateModel[];
}
export { YouTubeAPIStateModel };

