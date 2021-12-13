import { action } from 'typesafe-actions';
import actions from '../constants/actions';

export const addToCart = (product: any) => {
  return action(actions.ADD_TO_CART, { product });
};

export const removeFromCart = (productId: string) => {
  return action(actions.REMOVE_FROM_CART, { productId });
};
