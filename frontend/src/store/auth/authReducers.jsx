import { authConstants } from "./authConstants";

const initialState = {
    isAuthenticated: false,
    profileData: {},
};

export const authReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case authConstants.LOGIN_SUCCESS: {
            return {
                ...initialState,
                isAuthenticated: true,
                profileData: payload,
            };
        }
        case authConstants.LOGIN_FAILURE: {
            return initialState;
        }

        default:
            return state;
    }
};
