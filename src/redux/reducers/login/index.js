import * as Types from 'ConfigsRoot/constants';

const initialState = {
    accessToken: '',
    id: '',
    email: '',
    role: '',
    name: ''
}

const loginSuccess = (state, action) => {
    const {accessToken, id, email, role, name} = action.payload;
    window.localStorage.setItem('auth', JSON.stringify(action.payload));
    return {
        ...state, accessToken, id, email, role, name
    }
}

const getCurrentAuthSuccess = (state, action) => {
    const {accessToken, id, email, role, name} = action.payload;
    return {
        ...state, accessToken, id, email, role, name
    }

}

const logoutAuthSuccess = (state, action) => {
    window.localStorage.removeItem('auth');
    return{
        ...state, 
        accessToken: '',
        id: '',
        email: '',
        role: '',
        name: ''
    }
}

const login = (state = initialState, action) => {
    switch(action.type) {
        case Types.LOGIN_SUCCESS:
            return loginSuccess(state, action);
        case Types.GET_CURRENT_AUTH_SUCCESS:
            return getCurrentAuthSuccess(state, action);
        case Types.LOGOUT_SUCCESS:
            return logoutAuthSuccess(state, action)
        default:
            return state;
    }
}

export default login;