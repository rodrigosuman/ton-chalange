import { Reducer } from 'redux';
import actions from '../../constants/actions';
import { TProductsState } from './types';

export const INITIAL_STATE: TProductsState = {
  data: [],
  isLoading: false,
};

const reducer: Reducer<TProductsState, { type: string; payload: any }> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case actions.SET_PRODUCTS:
      return { data: action.payload?.data, isLoading: false };

    case actions.SET_IS_LOADING:
      return { ...state, isLoading: action.payload?.isLoading };

    default:
      return state;
  }
};

export default reducer;
