import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import RootNavigator from '../../navigators/RootNavigator';
import crosswords from './crosswords';
import auth from './auth';
import profile from './profile';

const router = createNavigationReducer(RootNavigator);

const appReducer = combineReducers({
  router,
  crosswords,
  auth,
  profile
});

export default appReducer;
