import { all } from "redux-saga/effects";
import { watchLogin } from "./auth/authSagas";

function* rootSaga() {
  yield all([watchLogin()]);
}
export default rootSaga;
