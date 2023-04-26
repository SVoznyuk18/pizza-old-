import * as Types from 'ConfigsRoot/constants';



export const createNewManager = (params) => ({type: Types.CRATE_NEW_MANAGER, payload: params});
export const getManagers = () => ({type: Types.GET_MANAGERS});
export const deleteManager = (params) => ({type: Types.DELETE_MANAGER, payload: params});