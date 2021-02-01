import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import createSagaMiddlware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMIddleware = createSagaMiddlware();

const middlewares = [sagaMIddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMIddleware.run(rootSaga);

export const persistor = persistStore(store); 

// export default { store, persistor };