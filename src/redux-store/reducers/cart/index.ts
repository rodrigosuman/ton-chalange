import { Reducer } from 'redux';
import actions from '../../constants/actions';
import { TProduct } from '../products/types';
import { TCartState } from './types';

export const INITIAL_STATE: TCartState = {
  data: [],
  total: 0,
};

const reducer: Reducer<TCartState, { type: string; payload: any }> = (
  state = INITIAL_STATE,
  action,
) => {
  const makeTotal = (products: TProduct[]) => {
    let total = 0;

    products.forEach(product => (total += product.price));

    return total;
  };

  switch (action.type) {
    case actions.TOGGLE_PRODUCT_CART: {
      const _product = state.data.find(
        product => product.id === action.payload?.product?.id,
      );

      if (_product) {
        const _products = [...state.data].filter(
          product => product.id !== _product.id,
        );

        return { ...state, data: _products, total: makeTotal(_products) };
      }

      const _products = [...state.data, action.payload?.product];

      return {
        ...state,
        data: [...state.data, action.payload?.product],
        total: makeTotal(_products),
      };
    }

    case actions.DELETE_PRODUCT_LIST: {
      const productListToDelete: TProduct[] =
        action.payload.productListToDelete;

      const _products = [...state.data].filter(
        product => !productListToDelete.find(item => item.id === product.id),
      );

      return {
        ...state,
        data: _products,
      };
    }

    default:
      return state;
  }
};

export default reducer;
