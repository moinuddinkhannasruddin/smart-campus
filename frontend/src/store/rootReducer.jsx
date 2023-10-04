import { combineReducers } from "redux";
import { authReducers } from "./auth/authReducers";

const rootReducers = combineReducers({
  login: authReducers,
});

export default rootReducers;
