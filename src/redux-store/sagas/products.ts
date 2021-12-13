import { call, put, takeLatest } from 'redux-saga/effects';
import { setProducts } from '../actions/products';
import actions from '../constants/actions';

export function* getAllProducts(): Generator<any, any, any> {
  try {
    const products = yield call(() => Promise.resolve([]));

    yield put(setProducts(products));
  } catch (error) {}
}

function* sagas() {
  yield takeLatest(actions.ASYNC_GET_ALL_PRODUCTS, getAllProducts);
}

export default sagas;
