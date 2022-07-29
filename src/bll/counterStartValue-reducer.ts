export const initialState = {
    startValue: 0
}
export type initialStateType = typeof initialState

export const counterStartValueReducer = (state: initialStateType = initialState, action: setStartValueACType): initialStateType => {
    switch (action.type) {
        case 'SET-START-VALUE':debugger
            return {...state, startValue: action.payload}
        default:
            return state;
    }
}
type setStartValueACType = ReturnType<typeof setStartValueAC>


export const setStartValueAC = (startValue:number) => {
    debugger
    return {
        type: "SET-START-VALUE",
        payload: startValue
    } as const
}
