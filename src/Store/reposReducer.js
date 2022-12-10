export const SET_CART_FAV_ARR = "SET_CART_FAV_ARR";
export const SET_LOGIN = "SET_LOGIN";
export const SET_PASSWORD = "SET_PASSWORD";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

const defaultState = {
  cartFavArr: getFromLocalStorage("cartArr") || [],
  login: getFromLocalStorage("login") || null,
  password: getFromLocalStorage("password") || null,
  currentPage: 1,
  perPage: 10,
  totalCount: 0,
};

export default function reposReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CART_FAV_ARR:
      return { ...state, cartFavArr: action.payload };
    case SET_LOGIN:
      return { ...state, login: action.payload };
    case SET_PASSWORD:
      return { ...state, password: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
}

export const setCartFavArr = (cartFavArr) => ({
  type: SET_CART_FAV_ARR,
  payload: cartFavArr,
});

export const setLogin = (login) => ({
  type: SET_LOGIN,
  payload: login,
});

export const setPasswordState = (password) => ({
  type: SET_PASSWORD,
  payload: password,
});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  payload: currentPage,
});
