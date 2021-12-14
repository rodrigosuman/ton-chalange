import { action } from 'typesafe-actions';
import actions from '../constants/actions';
import { TProduct } from '../reducers/products/types';

export const toogleProductCart = (product: TProduct) => {
  return action(actions.TOGGLE_PRODUCT_CART, { product });
};

export const toogleProductToDeleteCart = (product: TProduct) => {
  return action(actions.TOGGLE_PRODUCT_DELETE_CART, { product });
};

export const deleteProductList = (productListToDelete: TProduct[]) => {
  return action(actions.DELETE_PRODUCT_LIST, { productListToDelete });
};
