import { takeLatest, put } from 'redux-saga/effects'
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

import * as Types from 'ConfigsRoot/constants';
import { db } from 'UtilsRoot/firebase';
import { getAutorization } from 'UtilsRoot';

function* watchLoginRequest(action) {
    try{
        const {accessToken, uid} = action.payload;
        const {id, email, role, name} = yield getAutorization(db, uid);
        yield put({type: Types.LOGIN_SUCCESS, payload: {accessToken, id, email, role, name}});
 
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