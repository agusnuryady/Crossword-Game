import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';

const middlewares = [];

const reactNavigation = createReactNavigationReduxMiddleware(
  // 'root',
  state => state.router,
)

middlewares.push(reactNavigation)

const logger = createLogger()
middlewares.push(logger)

middlewares.push(promise)

export default middlewares;
