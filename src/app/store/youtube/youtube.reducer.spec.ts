import { CardItem } from '../../youtube/models';
import * as YoutubeActions from './youtube.action';
import { youTubeApiReducer } from './youtube.reducer';
import { InitialYouTubeAPIState } from './youtube.state';

describe('searchReducer', () => {
  it('shouldn\'t update the state', () => {
    const action = YoutubeActions.loadYouTubeVideos();
    const state = youTubeApiReducer(InitialYouTubeAPIState, action);

    expect(state).toEqual(state);
  });

  it('shouldn\'t update the state if error', () => {
    const error = new Error();
    const action = YoutubeActions.loadYouTubeVideosFailure({ error });
    const state = youTubeApiReducer(InitialYouTubeAPIState, action);

    expect(state).toEqual(state);
  });

  it('should update the state', () => {
    const newVideosList: CardItem[] = [];
    const action = YoutubeActions.loadYouTubeVideosSuccess({ newVideosList });
    const state = youTubeApiReducer(InitialYouTubeAPIState, action);

    expect(state).toEqual(newVideosList);
  });
});
