import axios from "axios";

export const fetchBrandDetails = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json"
    );
    dispatch({ type: "FETCH_BRAND_DETAILS", payload: response.data });
  };
};

export const displayAllBrandsInCountry = (brands) => {
  return {
    type: "BRANDS_IN_COUNTRY",
    payload: brands,
  };
};

export const fetchImage = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json"
    );
    dispatch({ type: "FETCH_IMAGE", payload: response.data });
  };
};
