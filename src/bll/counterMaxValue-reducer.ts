export const initialState = {
    maxValue: 5
}
export type initialStateType = typeof initialState

export const counterMaxValueReducer = (state: initialStateType = initialState, action: setMaxValueACType): initialStateType => {
    switch (action.type) {
        case 'SET-MAX-VALUE':
            return {...state, maxValue: action.payload}
        default:
            return state;
    }
}
type setMaxValueACType = ReturnType<typeof setMaxValueAC>


export const setMaxValueAC = (maxValue:number) => {
    return {
        type: "SET-MAX-VALUE",
        payload: maxValue
    } as const
}
