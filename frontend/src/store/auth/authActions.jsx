
import { authConstants } from "./authConstants";

const authActions = {};

authActions.setLogin = (username, password) => {
    return {
        type: authConstants.LOGIN_REQUEST,
        payload: { username, password },
    };
};

export { authActions };