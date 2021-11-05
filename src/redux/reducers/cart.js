const ADD_PIZZA_TO_CART = "ADD_PIZZA_TO_CART";
const CLEAR_CART = "CLEAR_CART";
const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
const PLUS_CART_ITEM = 'PLUS_CART_ITEM';
const MINUS_CART_ITEM = 'MINUS_CART_ITEM';

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => sum + obj.price, 0);

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_TO_CART: {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      /* const items = Object.values(newItems).map((obj) => obj.items);
      const allPizzas = [].concat.apply([], items); */
      const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0);
      const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0);

      return {
        ...state,
        items: newItems,
        //кол-во элементов в объекте массивов объектов (под ключами)
        //[].concat.apply([], Object.values(newItems)) - массивы объектов по ключам превращаются в 1 массив
        totalCount,
        totalPrice,
      };
    }
    case CLEAR_CART: {
      return {
        ...state,
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };
    }
    case REMOVE_CART_ITEM: {
      const newItems = {
        ...state.items,
      };

      const currentTotalPrice = newItems[action.payload].totalPrice; // стоимость удаляемого
      const currentTotalCount = newItems[action.payload].items.length; // кол-во удаляемых

      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }
    case PLUS_CART_ITEM: {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }
    case MINUS_CART_ITEM: {
      const oldItems = state.items[action.payload].items;
      const newObjItems =
        oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
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

export const clearCartAC = () => ({ type: CLEAR_CART });

export const removeCartItemAC = (id) => ({
  type: REMOVE_CART_ITEM,
  payload: id,
});

export const plusCartItemAC = (id) => ({
  type: PLUS_CART_ITEM,
  payload: id,
});

export const minusCartItemAC = (id) => ({
  type: MINUS_CART_ITEM,
  payload: id,
});