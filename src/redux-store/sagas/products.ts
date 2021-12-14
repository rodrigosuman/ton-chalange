import uuid from 'react-native-uuid';
import { call, put, takeLatest } from 'redux-saga/effects';
import useCurrencyFormater from '../../hooks/useCurrencyFormater';
import api from '../../services/api';
import { setProducts } from '../actions/products';
import actions from '../constants/actions';
import { TProduct } from '../reducers/products/types';

export function* getAllProducts(): Generator<any, any, any> {
  try {
    const products: TProduct[] = yield call(() =>
      api.get(
        'https://gist.githubusercontent.com/rodrigosuman/d11cea7dbd0de8db347a27b418c7d072/raw/b89234638c56c20bc2c463975f058cf3e81c0da5/products.mock.json',
      ),
    );

    yield put(
      setProducts(
        products.map((product, index) => ({
          ...product,
          name: `${product.name} ${index + 1}`,
          formatedPrice: useCurrencyFormater('BRL').format(product.price),
          id: uuid.v4(),
        })),
      ),
    );
  } catch (error) {}
}

function* sagas() {
  yield takeLatest(actions.ASYNC_GET_ALL_PRODUCTS, getAllProducts);
}

export default sagas;
