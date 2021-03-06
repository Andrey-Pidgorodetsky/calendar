import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers/root-reduce';

const middleware = [logger];

const store = createStore(rootReducer, compose(
    applyMiddleware(...middleware,thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    )

export default store;
