import { combineReducers, createStore, applyMiddleware } from "redux";
import { filtersReducer } from "./reducers/filters";
import { pizzasReducer } from "./reducers/pizzas";
import thunk from "redux-thunk";
import { compose } from "redux";
import { cartReducer } from "./reducers/cart";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
  cart: cartReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
