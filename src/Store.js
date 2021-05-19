import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import spellReducer from "./reducers/spellReducer";
import { modelReducer, formReducer } from 'react-redux-form';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(combineReducers({
  spells: spellReducer,
  spell: modelReducer('spell'),
  spellForm: formReducer('spell')
}), composeEnhancer(applyMiddleware(thunk)));

export default store;