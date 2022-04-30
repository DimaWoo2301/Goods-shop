import { DELETE_POST, SET_IT_BASKET } from './reducer';

export const setBasket = (product, photo, color) => ({
  type: SET_IT_BASKET, product, photo, color,
});
export const deleteBasket = (idProduct) => ({ type: DELETE_POST, idProduct });
