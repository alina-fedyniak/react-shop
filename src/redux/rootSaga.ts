import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import productsSaga from './product/saga';

export default function* rootSaga(): SagaIterator {
  yield all([
    fork(productsSaga)
  ]);
}
