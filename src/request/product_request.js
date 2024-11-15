import axios from "axios";
import { BASE_URL } from "../consts/url";
import { BURGER } from "../consts/consts-url";
import { RESTAURANT } from "../consts/consts-url";

export const baseURL = axios.create({
  baseURL: BASE_URL,
  headers: {},
});

export const getFoods = () => {
  return baseURL(BURGER);
};

export const getRestaurants = () => {
  return baseURL(RESTAURANT);
};

// export const getProfile = () => {
//   return baseURL("/profile");
// };

// export const getAuth = () => {
//   return baseURL("/auth");
// };

// export const getCheckToken = ({ token }) => {
//   return baseURL(`/check-token?token=${token}`);
// };
