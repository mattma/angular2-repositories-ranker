import {SET_ORDER_BY} from '../actions/app';

const initialState: string = "descending";

export function OrderByReducer(state: string = initialState, action): string {
  switch (action.type) {
    case SET_ORDER_BY:
      const {orderBy} = action;
      return orderBy;

    default:
      return state;
  }
};
