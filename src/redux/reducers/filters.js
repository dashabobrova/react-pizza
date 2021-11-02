const SET_SORT_BY = "SET_SORT_BY";
const SET_CATEGORY = "SET_CATEGORY";

const initialState = {
  sortBy: {
    type: 'popular',
    order: 'desc'
  },
  category: null, // инедкс значения (все)
  
};

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

export const setSortByAC = ({type, order}) => ({ type: SET_SORT_BY, payload: {type, order} });

export const setCategoryAC = (catIndex) => ({
  type: SET_CATEGORY,
  payload: catIndex,
});
