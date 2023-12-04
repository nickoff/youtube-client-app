import * as fromActions from './search.action';

describe('Search Actions', () => {
  describe('search', () => {
    it('should create an action', () => {
      expect.assertions(1);
      const query = 'test';
      const action = fromActions.search({ searchQuery: query });

      expect({ ...action }).toEqual({
        type: '[Search] Input query',
        searchQuery: query,
      });
    });
  });
});
