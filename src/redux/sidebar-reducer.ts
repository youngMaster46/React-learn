export type InitialStateType = {
    friendsList: Array<{ name:string, id:number }>
}
let initialState:InitialStateType = {
    friendsList: [
        {name: 'Lilya', id: 1},
        {name: 'Nastya', id: 2},
        {name: 'Liza', id: 3},
    ]
};

const sidebarReducer = (state = initialState, action:any) => {
    return state;
}
export default sidebarReducer;