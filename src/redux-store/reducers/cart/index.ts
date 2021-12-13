import { Reducer } from 'redux';
import actions from '../../constants/actions';
import { TCartState } from './types';

export const INITIAL_STATE: TCartState = {
  data: [],
};

const reducer: Reducer<TCartState, { type: string; payload: any }> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case actions.ADD_TO_CART:
      return { data: [...state.data, action.payload?.product] };

    case actions.REMOVE_FROM_CART: {
      const _products = [...state.data].filter(
        product => product.id !== action.payload?.productId,
      );

      return { data: _products };
    }

    default:
      return state;
  }
};

export default reducer;
