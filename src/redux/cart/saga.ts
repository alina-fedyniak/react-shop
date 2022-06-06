import { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
    CartTypes,
    createCartSuccess,
    createCartFail,
} from './actions';
import { message } from 'antd';
import { CartAPI } from '../../services/CartApi';
import { CreateCart } from './types';

function* createCartSaga(action: CreateCart): Generator {
    try {
        const response: any = yield call(CartAPI.createCart, action.payload)
        yield put(createCartSuccess(response?.data))
        console.log(response)
    } catch (e: any) {
        yield put(createCartFail())
        message.error(e.data.message)
    }
}

function* cartSaga(): SagaIterator {
    yield all([
        takeLatest(CartTypes.CREATE_CART, createCartSaga),
    ])
}

export default cartSaga;