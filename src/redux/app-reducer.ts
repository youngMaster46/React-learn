import { AppStateType } from './redux-store';
import { Dispatch } from 'redux';
import { getAuthUserData } from "./auth-reducer";
import { ThunkAction } from 'redux-thunk';

const INITIALIZED_SUCCESS = 'social-max/app/INITIALIZED_SUCCESS';


let initialState = {
    initialized: false
};
export type InitialStateType = typeof initialState

type ActionsTypes = InitializedSuccessActionType

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;

    }
}
type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess: () => InitializedSuccessActionType = () => ({
    type: INITIALIZED_SUCCESS,
})
type DispatchType = Dispatch<ActionsTypes>
type GetStateType = () => AppStateType

export const initializedApp = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => {
    // Теперь не нужно устанавливать типы dispatch и getState отдельно
    return async (dispatch, getState) => {
        let promise = dispatch(getAuthUserData());
        Promise.all([promise]).then(() => { dispatch(initializedSuccess()) })
    }
}
export default appReducer;