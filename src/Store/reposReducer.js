export const SET_CART_FAV_ARR = "SET_CART_FAV_ARR";

function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

const defaultState = {
  cartFavArr: getFromLocalStorage("cartArr") || [],
};

export default function reposReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CART_FAV_ARR:
      return { ...state, cartFavArr: action.payload };
    default:
      return state;
  }
}

export const setCartFavArr = (cartFavArr) => ({
  type: SET_CART_FAV_ARR,
  payload: cartFavArr,
});
