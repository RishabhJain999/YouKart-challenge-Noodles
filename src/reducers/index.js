import { combineReducers } from "redux";

const initialState = [];

export const allBrands = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_BRAND_DETAILS":
      return payload;
    default:
      return state;
  }
};

export const allBrandsInCountry = (state = [], action) => {
  switch (action.type) {
    case "BRANDS_IN_COUNTRY":
      return action.payload;
    default:
      return state;
  }
};

export const fetchBrandsImage = (state = [], action) => {
  switch (action.type) {
    case "FETCH_IMAGE":
      return action.payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  allBrands,
  allBrandsInCountry,
  fetchBrandsImage,
});
