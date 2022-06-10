import React, {useState} from 'react';
import stl from "./Counter.module.css"
import Button from "./Button/Button";

const Counter = () => {
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
    const valueClassname = `${stl.screenValue} + ${value === 5 && stl.maxValue }` // Добавляем класс для максимального значения
    return (
        <div className={stl.wrapper}>
            <div className={stl.screen}>
                <p className={valueClassname}>{value}</p>
            </div>
            <div className={stl.keyboard}>
                <Button name={"inc"} callBack={changeValue} disabled={value === 5}/>
                <Button name={"reset"} callBack={resetValue} disabled={value === 0}/>
            </div>
        </div>
    );
};

export default Counter;