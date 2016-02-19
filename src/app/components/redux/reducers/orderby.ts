import {SET_ORDER_BY} from '../actions/app';

const initialState: string = "descending";

export function OrderByReducer(state: string = initialState, action): string {
  switch (action.type) {
    case SET_ORDER_BY:
      const {orderBy} = action;
      console.log('orderBy: ', orderBy);
      return orderBy;

    default:
      return state;
  }
};
