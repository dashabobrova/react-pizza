const ADD_PIZZA_TO_CART = "ADD_PIZZA_TO_CART";

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_TO_CART: {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };
      return {
        ...state,
        items: newItems,
        //кол-во элементов в объекте массивов объектов (под ключами)
        //[].concat.apply([], Object.values(newItems)) - массивы объектов по ключам превращаются в 1 массив
        totalCount: [].concat.apply([], Object.values(newItems)).length,
        totalPrice: [].concat.apply([], Object.values(newItems)).reduce((sum, obj) => sum + obj.price, 0)
      };
    }
    default:
      return state;
  }
};

export const addPizzaToCartAC = (pizzaObj) => ({
  type: ADD_PIZZA_TO_CART,
  payload: pizzaObj,
});
