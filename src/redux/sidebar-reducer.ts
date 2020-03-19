type FriendType = {
    name: string
    id: number
}
let initialState = {
    friendsList: [
        { name: 'Lilya', id: 1 },
        { name: 'Nastya', id: 2 },
        { name: 'Liza', id: 3 },
    ] as Array<FriendType>
};
export type InitialStateType = typeof initialState

const sidebarReducer = (state = initialState, action: any) => {
    return state;
}
export default sidebarReducer;