import authReducer, { setAuthUserData, getCaptchaUrlSuccess } from "./auth-reducer"

let state = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

describe('testing auth reducer', () => {
    it('should install user data(userId, email, login, isAuth', () => {
        let action = setAuthUserData(5, 'max@max.com', 'dyadya', true);
        let newState = authReducer(state, action);
        expect(newState).toMatchObject({
              userId: 5,
              email: 'max@max.com',
              login: 'dyadya',
              isAuth: true
            }); 
    })
    it(`captchaUrl should'n be null `, () => {
        let action = getCaptchaUrlSuccess('https://social-max-testing');
        let newState = authReducer(state, action);
        expect(newState).toBeTruthy();
    })
})