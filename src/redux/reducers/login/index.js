import * as Types from 'ConfigsRoot/constants';

const initialState = {
    accessToken: '',
    id: '',
    email: '',
    role: ''
}

const loginSuccess = (state, action) => {
    const {accessToken, id, email, role} = action.payload;
    window.localStorage.setItem('auth', JSON.stringify(action.payload));
    return {
        ...state, accessToken, id, email, role
    }
}

const getCurrentAuthSuccess = (state, action) => {
    const {accessToken, id, email, role} = action.payload;
    return {
        ...state, accessToken, id, email, role
    }

}

const login = (state = initialState, action) => {
    switch(action.type) {
        case Types.LOGIN_SUCCESS:
            return loginSuccess(state, action);
        case Types.GET_CURRENT_AUTH_SUCCESS:
            return getCurrentAuthSuccess(state, action);
        default:
            return state;
    }
}

export default login;