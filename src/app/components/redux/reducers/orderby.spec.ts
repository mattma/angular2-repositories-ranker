import {
  it,
  describe
} from 'angular2/testing';

import {OrderByReducer} from './orderby';

describe('OrderBy Reducer', () => {
  const initialState = 'descending';

  it('should equal initial state when app is loaded', () => {
    const ret = OrderByReducer(initialState, {});
    expect(ret).toEqual(initialState);
  });
});