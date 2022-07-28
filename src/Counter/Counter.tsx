import React from 'react';
import stl from "./Counter.module.css"
import Button from "./Button/Button";
export type CounterPropsType = {
    value:number
    startValue:number
    maxValue:number
    setView:()=>void
    changeValueFunction:()=>void
    resetValueFunction:()=>void
}

const Counter = (props:CounterPropsType) => {
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
    const valueClassname = `${stl.screenValue} + ${props.value === props.maxValue && stl.maxValue }` // Добавляем класс для максимального значения
    return (
        <div className={stl.wrapper}>
            <div className={stl.screen}>
                <p className={valueClassname}>{props.value}</p>
            </div>
            <div className={stl.keyboard}>
                <Button name={"inc"} callBack={props.changeValueFunction} disabled={props.value === props.maxValue}/>
                <Button name={"reset"} callBack={props.resetValueFunction} disabled={props.value === props.startValue}/>
                <Button name={"set"} callBack={set} />
            </div>
        </div>
    );
};

export default Counter;