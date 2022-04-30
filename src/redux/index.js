import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './basket/reducer';
import shopReducer from './shop-reducer';

const rootReducer = combineReducers({

  basket: reducer,
  shop: shopReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
