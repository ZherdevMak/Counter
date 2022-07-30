import {combineReducers, legacy_createStore} from "redux";

import {counterValueReducer} from "./counterValue-reducer";
import {counterStartValueReducer} from "./counterStartValue-reducer";
import {counterMaxValueReducer} from "./counterMaxValue-reducer";


const rootReducer = combineReducers({
    counterValue: counterValueReducer,
    startValue: counterStartValueReducer,
    maxValue: counterMaxValueReducer
})
let preloadedState
const presistedState = localStorage.getItem('state')
if (presistedState) {
    preloadedState = JSON.parse(presistedState)
}

export const store = legacy_createStore(rootReducer,preloadedState)
store.subscribe(()=> {
    localStorage.setItem('state',JSON.stringify(store.getState()))
})

export type AppStateType = ReturnType<typeof rootReducer>

export type storeType = typeof store