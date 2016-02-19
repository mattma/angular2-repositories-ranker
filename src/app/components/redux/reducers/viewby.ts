import {SET_VIEW_BY} from '../actions/app';

const initialState: string = "stargazers_count";

export function ViewByReducer(state: string = initialState, action): string {
  switch (action.type) {
    case SET_VIEW_BY:
      const {viewBy} = action;
      return viewBy;

    default:
      return state;
  }
};
