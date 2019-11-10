import appReducer, {  initializedSuccess } from "./app-reducer"

let state = {
    initialized: false
}

describe('testing app reducer', () => {
    it('initialized property should be changed from false to true', () => {
        let action = initializedSuccess();
        let newState = appReducer(state, action);
        expect(newState.initialized).toBe(true);
    })
})