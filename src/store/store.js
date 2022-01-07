import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './reducers/root-reduce';

const middleware = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;