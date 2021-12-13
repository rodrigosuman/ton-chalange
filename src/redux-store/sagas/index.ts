import { all } from 'redux-saga/effects';
import productsSagas from './products';

function* sagas() {
  yield all({
    productsSagas,
  });
}

export default sagas;
