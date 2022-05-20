import { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ProductsTypes, getOneProductFail, getOneProductSuccess } from './actions';
import { ProductsAPI } from '../../services/ProductsApi';
import { GetProductDetails } from './types';
import { message } from 'antd';

function* getOneProductSaga(action: GetProductDetails): Generator {
    try {
        const params = { }
        const response: any = yield call(ProductsAPI.getOneProduct, action.payload, params)
        yield put(getOneProductSuccess(response?.data?.data)) // error
    } catch (e: any) {
        yield put(getOneProductFail())
        message.error(e.data.message)
    }
}

function* productsSaga(): SagaIterator {
    yield all([
        takeLatest(ProductsTypes.GET_ONE_PRODUCT, getOneProductSaga)
    ])
}

export default productsSaga;