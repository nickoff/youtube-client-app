import { CardItem } from '../../youtube/models';
import * as fromActions from './youtube.action';

describe('YouTube Actions', () => {
  describe('youtube', () => {
    it('should create an action with type [YouTube/API] Load YouTube Videos', () => {
      expect.assertions(1);
      const action = fromActions.loadYouTubeVideos();

      expect({ ...action }).toEqual({
        type: '[YouTube/API] Load YouTube Videos',
      });
    });

    it('should create an action with type [YouTube/API] Load YouTube Videos Success', () => {
      expect.assertions(1);
      const newVideosList: CardItem[] = [];
      const action = fromActions.loadYouTubeVideosSuccess({ newVideosList });

      expect({ ...action }).toEqual({
        type: '[YouTube/API] Load YouTube Videos Success',
        newVideosList,
      });
    });

    it('should create an action with type [YouTube/API] Load YouTube Videos Failure', () => {
      expect.assertions(1);
      const error = new Error();
      const action = fromActions.loadYouTubeVideosFailure({ error });

      expect({ ...action }).toEqual({
        type: '[YouTube/API] Load YouTube Videos Failure',
        error,
      });
    });
  });
});
