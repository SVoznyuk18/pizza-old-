/* eslint-disable object-curly-newline */
import { takeLatest, put } from 'redux-saga/effects';

import * as Types from 'ConfigsRoot/constants';
import { createNewDocument, getDocuments, deleteUser, db } from 'UtilsRoot';

function* watchCreateNewManager(action) {
  try {
    const { avatarUrl, email, password, name, phone, role } = action.payload;
    const data = {
      avatarUrl,
      email,
      name,
      phone,
      role,
      id: `${name}-${email}`,
      password,
    };
    yield put({ type: Types.GET_MANAGERS_LOADING, payload: true });
    yield createNewDocument(db, 'managers', `${name}-${email}`, data);

    const managers = yield getDocuments(db, 'managers');
    yield put({ type: Types.GET_MANAGERS_SUCCESS, payload: { managers } });

    yield put({ type: Types.GET_MANAGERS_LOADING, payload: false });
  } catch {
    yield put({ type: Types.MODAL_SHOW, payload: { isOpenModal: true, modalType: Types.MODAL.STATUS_MODAL, params: { status: 'failure' } } });
  }
}

function* watchGetManagers() {
  try {
    const managers = yield getDocuments(db, 'managers');
    yield put({ type: Types.GET_MANAGERS_LOADING, payload: true });
    yield put({ type: Types.GET_MANAGERS_SUCCESS, payload: { managers } });
    yield put({ type: Types.GET_MANAGERS_LOADING, payload: false });
  } catch {
    yield put({ type: Types.GET_MANAGERS_FAILURE, payload: true });
  }
}

function* watchDeleteManager(action) {
  try {
    const { id } = action.payload;
    yield put({ type: Types.GET_MANAGERS_LOADING, payload: true });
    yield deleteUser(db, 'managers', id);
    yield put({ type: Types.DELETE_MANAGER_SUCCESS, payload: { id } });
    yield put({ type: Types.GET_MANAGERS_LOADING, payload: false });
  } catch {
    yield put({ type: Types.DELETE_MANAGER_FAILURE, payload: true });
    yield put({ type: Types.MODAL_SHOW, payload: { isOpenModal: true, modalType: Types.MODAL.STATUS_MODAL, params: { status: 'failure' } } });
  }
}

export default function* watchUsers() {
  yield takeLatest(Types.CRATE_NEW_MANAGER, watchCreateNewManager);
  yield takeLatest(Types.GET_MANAGERS, watchGetManagers);
  yield takeLatest(Types.DELETE_MANAGER, watchDeleteManager);
}
