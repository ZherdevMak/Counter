import React, {FormEvent, useState} from 'react';
import stl from "./CounterSet.module.css"
import Button from "./Button/Button";

export type CounterSetPropsType = {
    startValue: number
    maxValue: number
    setView: () => void
    setStartValueFunction: (startValueData: number) => void
    setMaxValueFunction: (maxValueData: number) => void
}

const Counter = (props: CounterSetPropsType) => {
    // let error = false
    let [error, setError] = useState<boolean>(false)
    let [localMaxValue, setlocalMaxValue] = useState<string>(`${props.maxValue}`)
    let [localStartValue, setlocalStartState] = useState<string>(`${props.startValue}`)

    // Функция для сброса счетчика
    const setStartValue = () => {
        !error && props.setStartValueFunction(Number(localStartValue))
    }
    const setLocalStartValue = (e: FormEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        if (Number(value) < 0 || Number(value) >= Number(localMaxValue)) {setError(true)}
        else if (error) setError(false)
        setlocalStartState(value)
    }
    const setMaxValue = () => {
        !error && props.setMaxValueFunction(Number(localMaxValue))
    }
    const setLocalMaxValue = (e: FormEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        if (Number(value) <= Number(localStartValue)) {setError(true)}
        else if (error) setError(false)
        setlocalMaxValue(value)
    }
    const set = () => {
        props.setView()
        setStartValue()
        setMaxValue()
    }
    const inputClassname = `${stl.inputScreen} + ${error && stl.inputError }`
    return (
        <div className={stl.wrapper}>

            <div className={stl.screen}>
                <div className={stl.halfScreen}>
                    <span className={stl.screenText}>Max value:</span>
                    <input value={localMaxValue}
                           // onBlur={setMaxValue}
                           onInput={(e) => {setLocalMaxValue(e)}}
                           className={inputClassname} type="number"/>
                </div>
                <div className={stl.halfScreen}>
                    <span className={stl.screenText}>Start value:</span>
                    <input value={localStartValue}
                           // onChange={(e) =>{setStartValue(e)}}
                           onInput={(e) => {setLocalStartValue(e)}}
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