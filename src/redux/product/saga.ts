import { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
    ProductsTypes,
    getOneProductFail,
    getOneProductSuccess,
    getAllProductSuccess,
    getAllProductFail
} from './actions';
import { ProductsAPI } from '../../services/ProductsApi';
import {GetAllProducts, GetProductDetails} from './types';
import { message } from 'antd';

function* getOneProductSaga(action: GetProductDetails): Generator {
    try {
        const params = { }
        const response: any = yield call(ProductsAPI.getOneProduct, action.payload, params)
        yield put(getOneProductSuccess(response?.data))
    } catch (e: any) {
        yield put(getOneProductFail())
        message.error(e.data.message)
    }
}

function* getAllProductsSaga(): Generator {
    try {
        const response: any = yield call(ProductsAPI.getAllProducts)
        console.log(response)
        yield put(getAllProductSuccess(response?.data))
    } catch (e: any) {
        yield put(getAllProductFail())
        message.error(e.data.message)
    }
}

function* productsSaga(): SagaIterator {
    yield all([
        takeLatest(ProductsTypes.GET_ONE_PRODUCT, getOneProductSaga),
        takeLatest(ProductsTypes.GET_PRODUCTS, getAllProductsSaga)
    ])
}

export default productsSaga;