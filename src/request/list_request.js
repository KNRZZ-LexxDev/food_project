import { baseURL } from "../request/product_request";

export const addedProducts = (data) => {
  return baseURL.post('/burgers', data);
};

export const getProducts = () => {
  return baseURL('/burgers');
};

export const removeOneProduct = (id) => {
  return baseURL.delete(`/burgers/${id}`);
};

export const editProduct = (data) => {
  return baseURL.patch(`/burgers/${data.id}`, data);
};