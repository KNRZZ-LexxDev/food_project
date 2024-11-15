import axios from "axios";
import { BASE_URL } from "../consts/url";
import { AUTH } from "../consts/consts-url";

export const baseURL = axios.create({
  baseURL: BASE_URL,
  headers: {},
});

export const getAuth = () => {
    return baseURL(AUTH);
  };