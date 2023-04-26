import * as Types from 'ConfigsRoot/constants';
import { GET_MANAGERS_FAILURE, GET_MANAGERS_SUCCESS } from '../../../configs/constants';

const initialState = {
    managers: [],
    loadingManager: false,
    errorManager: false
};

const getManagerSuccess = (state, action) => {

    const { managers } = action.payload;

    return {
        ...state, managers
    }
}

const getManagersLoading = (state, action) => {

    const loadingManager = action.payload;

    return {
        ...state, loadingManager
    }
}

const deleteManagerSuccess = (state, action) => {
    const userId = action.payload.id;
    let managers = [...state.managers];
    managers = managers?.filter(manager => manager?.id !== userId);
    return {
        ...state,
        managers
    }
}

// const getManagersFailure = (state, action) => {

// }

const users = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_MANAGERS_SUCCESS:
            return getManagerSuccess(state, action)
        case Types.GET_MANAGERS_LOADING:
            return getManagersLoading(state, action)
        case Types.DELETE_MANAGER_SUCCESS:
            return deleteManagerSuccess(state, action)
        // case Types.GET_MANAGERS_FAILURE:
        //     return getManagersFailure(state, action)
        default:
            return state
    }
}

export default users;