import axios from "axios";

const SET_PIZZAS = "SET_PIZZAS";
const SET_LOADED = "SET_LOADED";

const initialState = {
  items: [],
  isLoaded: false,
};

export const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PIZZAS:
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    case SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoadedAC(false));
  /* fetch('http://localhost:3000/db.json').then((res) => res.json()).then(json => {setPizzas(json.pizzas)}); */
  axios
    .get(
      `http://localhost:3001/pizzas?${
        category !== null ? `category=${category}` : ''
      }&_sort=${sortBy.type}&_order=${sortBy.order}`
    )
    .then((res) => {
      dispatch(setPizzasAC(res.data));
    });
};

export const setPizzasAC = (items) => ({ type: SET_PIZZAS, payload: items });
export const setLoadedAC = (val) => ({ type: SET_LOADED, payload: val });
