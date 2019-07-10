import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import RootNavigator from '../../navigators/RootNavigator';
import crosswords from './crosswords';

const router = createNavigationReducer(RootNavigator);

const appReducer = combineReducers({
  router,
  crosswords
})

export default appReducer;
