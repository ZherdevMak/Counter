import {applyMiddleware, combineReducers, legacy_createStore} from "redux";

import exp from "constants";
import {counterValueReducer} from "./counterValue-reducer";
import {counterStartValueReducer} from "./counterStartValue-reducer";
import {counterMaxValueReducer} from "./counterMaxValue-reducer";


const rootReducer = combineReducers({
    counterValue: counterValueReducer,
    startValue: counterStartValueReducer,
    maxValue: counterMaxValueReducer

})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer)

export type storeType = typeof store