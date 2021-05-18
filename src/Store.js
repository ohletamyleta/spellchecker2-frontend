import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import spellReducer from "./reducers/spellReducer";
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  spellReducer
})

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;