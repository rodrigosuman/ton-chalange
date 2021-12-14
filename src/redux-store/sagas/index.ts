import { fork } from 'redux-saga/effects';
import productsSagas from './products';

function* sagas() {
  yield fork(productsSagas);
}

export default sagas;
