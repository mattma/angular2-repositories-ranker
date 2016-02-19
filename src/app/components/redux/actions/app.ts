export const SET_VIEW_BY = 'SET_VIEW_BY';
export const SET_ORDER_BY = 'SET_ORDER_BY';

export class AppActions {
  setViewBy(viewBy: string) {
    return {
      type: SET_VIEW_BY,
      viewBy
    };
  }

  setOrderBy(orderBy: string) {
    return {
      type: SET_ORDER_BY,
      orderBy
    };
  }
}
