import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session';
import reviews from './reviews';
import businessReducer from './businesses'

console.log('before combine reducer in store/index.js')

const rootReducer = combineReducers({
    session: sessionReducer,
    reviews,
    businesses: businessReducer

  });
  console.log('after combine reducers in store/index.js')
let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));

}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
  };
console.log('reached the end of store/index.js')


  export default configureStore;
