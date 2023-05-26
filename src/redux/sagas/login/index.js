import { takeLatest, put, call } from 'redux-saga/effects'

import * as Types from 'ConfigsRoot/constants';
import { login } from 'UtilsRoot'
import { db } from 'UtilsRoot/firebase';

function* watchLoginRequest(action) {
    try{
        const {userEmail, userPassword} = action.payload;
        const {avatarUrl, email, id, name, phone, role } = yield call(login, db, 'managers', userEmail, userPassword);
        yield put({type: Types.LOGIN_SUCCESS, payload: {avatarUrl, email, id, name, phone, role }});
 
    }catch {
    
    }
}

function* watchCurrentAuth(action) {
    const {accessToken, id, email, role, name} = action.payload.currentAuth;
    try{
        yield put({type: Types.GET_CURRENT_AUTH_SUCCESS, payload: {accessToken, id, email, role, name}});
      
    } catch {

    }
}

function* watchLogout(action) {
    try{
        yield put({type: Types.LOGOUT_SUCCESS})
    } catch{

    }
}

export default function* watchLogin() {
    yield takeLatest(Types.LOGIN, watchLoginRequest);
    yield takeLatest(Types.GET_CURRENT_AUTH, watchCurrentAuth);
    yield takeLatest(Types.LOGOUT ,watchLogout);
}