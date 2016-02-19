export const SET_VIEW_BY = 'SET_VIEW_BY';

export class AppActions {
  setViewBy(viewBy: string) {
    return {
      type: SET_VIEW_BY,
      viewBy
    };
  }
}
