import {createStore, combineReducers} from 'redux';
import createReducersAndGetActionsFunction from './makeReduxEasyAgain/createReducersAndGetActionsFunction';


import todosDef from './models/todos';
import counterDef from './models/todos';


const {reducers, getActions} = createReducersAndGetActionsFunction({
  todos: todosDef,
  counter: counterDef
});

const store = createStore(combineReducers(reducers));
console.log('HERE', store.getState());
window.store = store;

const actions = getActions(store.dispatch.bind(store));
window.actions = actions;

export default {
  store,
  actions
};


