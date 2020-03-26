import { AppStateType } from './redux-store';
import { authAPI, securityAPI } from "../api/api";
 import { stopSubmit } from 'redux-form';
import { Dispatch } from 'react';

const SET_USER_DATA = 'social-max/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'social-max/auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};
export type InitialStateType = typeof initialState
type ActionsTypes = SetAuthUserDataActionType|GetCaptchaUrlSuccessActionType

const authReducer = (state = initialState, action:ActionsTypes):InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        
        default:
            return state;

    }
}
type SetAuthUserDataActionPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: SetAuthUserDataActionPayloadType
}
export const setAuthUserData = (userId:number | null, email:string | null, login:string | null, isAuth:boolean):SetAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth }
})

type GetCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: {captchaUrl:string}
}
export const getCaptchaUrlSuccess = (captchaUrl:string):GetCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl }
})

type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>

export const getAuthUserData = () => {
    return async (dispatch:DispatchType, getState: GetStateType) => {
        let response = await authAPI.auth()
        if (response.data.resultCode === 0) {
            let { id, login, email } = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }
}


export const login = (email:string, password:string, rememberMe:boolean = false, captcha:string | null = null) => async (dispatch:DispatchType) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    }
    else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', { _error: message }))
    }
}
export const logout = () => async (dispatch:DispatchType) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch:DispatchType) => {
    let response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer;