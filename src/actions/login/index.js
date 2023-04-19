import * as Types from 'ConfigsRoot/constants';

export const login = params => ({type: Types.LOGIN, payload: params});

export const getCurrentAuth = params => ({type: Types.GET_CURRENT_AUTH, payload: params})

export const logout = () => ({type: Types.LOGOUT});