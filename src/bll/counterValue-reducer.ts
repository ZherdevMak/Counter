export const initialState = {
    value: 0
}
export type initialStateType = typeof initialState

export const counterValueReducer = (state: initialStateType = initialState, action: AllActionTypes): initialStateType => {
    switch (action.type) {
        case 'INC-VALUE':
            return {...state, value: state.value + 1}
        case 'RESET-VALUE':
            debugger
            return {...state, value: action.payload}
        default:
            return state;
    }
}
export type AllActionTypes = incValueACType | resetValueACType
type incValueACType = ReturnType<typeof incValueAC>
type resetValueACType = ReturnType<typeof resetValueAC>


export const incValueAC = () => {
    return {
        type: "INC-VALUE"
    } as const
}
export const resetValueAC = (startValue: number) => {
    debugger
    return {
        type: "RESET-VALUE",
        payload: startValue
    } as const
}
