import {combineReducers} from 'redux';

import {ViewByReducer as viewBy} from '../../components/redux/reducers/viewby';
import {OrderByReducer as orderBy} from '../../components/redux/reducers/orderby';

export default combineReducers({
  viewBy,
  orderBy
});
