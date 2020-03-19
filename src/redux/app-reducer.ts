import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'social-max/app/INITIALIZED_SUCCESS';


let initialState = {
  initialized: false 
};
export type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: 
            return {
                ...state,
                initialized: true
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

export const initializedApp = () => {
    return (dispatch:any) => {
        let promise = dispatch(getAuthUserData());
        Promise.all([promise]).then( () => { dispatch( initializedSuccess() ) })
    }
}
export default appReducer;