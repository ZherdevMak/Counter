import React, {FormEvent, useState} from 'react';
import stl from "./CounterSet.module.css"
import Button from "./Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../bll/store";
import {setStartValueAC} from "../bll/counterStartValue-reducer";
import {setMaxValueAC} from "../bll/counterMaxValue-reducer";
import {resetValueAC} from "../bll/counterValue-reducer";

export type CounterSetPropsType = {
    setView: () => void
}

const Counter = (props: CounterSetPropsType) => {
    const state = useSelector<AppStateType, AppStateType>(state => state)
    const dispatch = useDispatch()
    // локалный стэйт состояния ошибки
    let [error, setError] = useState<boolean>(false)
    // локальный стэйт максимального значения
    let [localMaxValue, setlocalMaxValue] = useState<string>(`${state.maxValue.maxValue}`)
    // локальный стэйт стартового значения
    let [localStartValue, setlocalStartState] = useState<string>(`${state.startValue.startValue}`)

    // Функция для установки стартового значения в стэйт приложения и сброса счетчика на него
    const setStartValue = () => {
        if (!error) {
            dispatch(setStartValueAC(Number(localStartValue)))
            dispatch(resetValueAC(Number(localStartValue)))
        }
    }
    // Функция для установки максимального значения в стэйт приложения
    const setMaxValue = () => {
        if (!error) {
            dispatch(setMaxValueAC((Number(localMaxValue))))
        }
    }
    // Функция для установки стартового значения в локальный стэйт и проверки на ошибку
    const setLocalStartValue = (e: FormEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        if (Number(value) < 0 || Number(value) >= Number(localMaxValue)) {
            setError(true)
        } else if (error) setError(false)
        setlocalStartState(value)
    }
    // Функция для установки максимального значения в локальный стэйт и проверки на ошибку
    const setLocalMaxValue = (e: FormEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        if (Number(value) <= Number(localStartValue)) {
            setError(true)
        } else if (error) setError(false)
        setlocalMaxValue(value)
    }
    // запуск функций установки стартового и максимального значения и вызов коллбэка переклюяения вида
    const set = () => {
        setStartValue()
        setMaxValue()
        props.setView()
    }
    // Добавляем класс для отображения ошибки
    const inputClassname = `${stl.inputScreen} + ${error && stl.inputError}`
    return (
        <div className={stl.wrapper}>
            <div className={stl.screen}>
                <div className={stl.halfScreen}>
                    <span className={stl.screenText}>Max value:</span>
                    <input value={localMaxValue}
                           onInput={(e) => {
                               setLocalMaxValue(e)
                           }}
                           className={inputClassname} type="number"/>
                </div>
                <div className={stl.halfScreen}>
                    <span className={stl.screenText}>Start value:</span>
                    <input value={localStartValue}
                           onInput={(e) => {
                               setLocalStartValue(e)
                           }}
                           className={inputClassname} type="number"/>
                </div>
            </div>
            <div className={stl.keyboard}>
                <Button name={"set"} callBack={set}/>
            </div>
        </div>
    );
};

export default Counter;