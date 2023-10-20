import { authApis } from "./authApis";
import { authConstants } from "./authConstants";
import { call, put, takeLatest } from "@redux-saga/core/effects";

function* authSagas({ type, payload }) {
    try {
        const response = yield call(authApis.login, payload);
        if (response) {
            localStorage.setItem("username", payload.username);
        }
        yield put({ type: authConstants.LOGIN_SUCCESS, payload: payload.username });
    } catch (error) {
        yield put({ type: authConstants.LOGIN_FAILURE, error: error.message });
    }
}

export function* watchLogin() {
    yield takeLatest(authConstants.LOGIN_REQUEST, authSagas);
}
