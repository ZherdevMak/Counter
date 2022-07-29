import React from 'react';
import stl from "./Counter.module.css"
import Button from "./Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../bll/store";
import {incValueAC, resetValueAC} from "../bll/counterValue-reducer";
export type CounterPropsType = {
    value:number
    setView:()=>void

}

const Counter = (props:CounterPropsType) => {
    const state = useSelector<AppStateType,AppStateType>(state => state)
    const dispatch = useDispatch()

    const changeValueFunction = () => {
        dispatch(incValueAC())
    }
    const resetValueFunction = () => {
        dispatch(resetValueAC(state.startValue.startValue))
    }
    // Объявляем локальный стейт

    // Функция для увелечения значения счетчика
    // const changeValue = () => {
    //     setValue(value + 1)
    // }
    // Функция для сброса счетчика
    // const resetValue = () => {
    //     setValue(0)
    // }
    const set = () => {
        props.setView()
    }
    const valueClassname = `${stl.screenValue} + ${state.counterValue.value === state.maxValue.maxValue && stl.maxValue }` // Добавляем класс для максимального значения
    return (
        <div className={stl.wrapper}>
            <div className={stl.screen}>
                <p className={valueClassname}>{props.value}</p>
            </div>
            <div className={stl.keyboard}>
                <Button name={"inc"} callBack={changeValueFunction} disabled={state.counterValue.value === state.maxValue.maxValue}/>
                <Button name={"reset"} callBack={resetValueFunction} disabled={state.counterValue.value === state.startValue.startValue}/>
                <Button name={"set"} callBack={set} />
            </div>
        </div>
    );
};

export default Counter;