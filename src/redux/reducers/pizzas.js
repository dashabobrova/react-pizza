const SET_PIZZAS = 'SET_PIZZAS';

const initialState = {
  items: [],
  isLoaded: false
};

export const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PIZZAS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export const setPizzasAC = (items) =>({type: SET_PIZZAS, payload: items});