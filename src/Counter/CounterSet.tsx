import React, {useState} from 'react';
import stl from "./CounterSet.module.css"
import Button from "./Button/Button";
export type CounterSetPropsType = {
    setView:()=>void
}

const Counter = (props:CounterSetPropsType) => {
    // Объявляем локальный стейт
    let [value, setValue] = useState<number>(0)

    // Функция для увелечения значения счетчика
    const changeValue = () => {
        setValue(value + 1)
    }
    // Функция для сброса счетчика
    const resetValue = () => {
        setValue(0)
    }
    const set = () => {
      props.setView()
    }
    const valueClassname = `${stl.screenValue} + ${value === 5 && stl.maxValue }` // Добавляем класс для максимального значения
    return (
        <div className={stl.wrapper}>

            <div className={stl.screen}>
                <div className={stl.halfScreen}>
                    <span className={stl.screenText}>Max value:</span><input className={stl.inputScreen} type="number"/>
                </div>
                <div className={stl.halfScreen}>
                    <span className={stl.screenText}>Start value:</span><input className={stl.inputScreen} type="number"/>
                </div>
            </div>
            <div className={stl.keyboard}>
                <Button name={"set"} callBack={set} disabled={value === 5}/>
            </div>
        </div>
    );
};

export default Counter;