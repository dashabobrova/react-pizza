import { combineReducers, createStore } from 'redux';
import { filtersReducer } from './reducers/filters';
import { pizzasReducer } from './reducers/pizzas';

  const rootReducer = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer
  });
  

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

