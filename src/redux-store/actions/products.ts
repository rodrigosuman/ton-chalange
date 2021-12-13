import { action } from 'typesafe-actions';
import actions from '../constants/actions';

export const asyncGetAllProducts = () => action(actions.ASYNC_GET_ALL_PRODUCTS);
export const setIsLoading = (isLoading: boolean) => {
  return action(actions.SET_IS_LOADING, { isLoading });
};
export const setProducts = (data: any) => {
  return action(actions.SET_PRODUCTS, { data });
};
