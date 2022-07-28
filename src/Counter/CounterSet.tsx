import React, {FormEvent} from 'react';
import stl from "./CounterSet.module.css"
import Button from "./Button/Button";
export type CounterSetPropsType = {
    startValue:number
    maxValue:number
    setView:()=>void
    setStartValueFunction:(startValueData:number)=>void
    setMaxValueFunction:(maxValueData:number)=>void
}

const Counter = (props:CounterSetPropsType) => {

    // Функция для сброса счетчика
    const setStartValue = (e:FormEvent<HTMLInputElement> ) => {

       let value = Number(e.currentTarget.value)
        props.setStartValueFunction(value)
    }
    const setMaxValue = (e:FormEvent<HTMLInputElement> ) => {

        let value = Number(e.currentTarget.value)
        props.setMaxValueFunction(value)
    }
    const set = () => {
      props.setView()
    }
    return (
        <div className={stl.wrapper}>

            <div className={stl.screen}>
                <div className={stl.halfScreen}>
                    <span className={stl.screenText}>Max value:</span><input value={props.maxValue} onInput={(e)=>{setMaxValue(e)}} className={stl.inputScreen} type="number"/>
                </div>
                <div className={stl.halfScreen}>
                    <span className={stl.screenText}>Start value:</span><input value={props.startValue} onInput={(e)=>{setStartValue(e)}} className={stl.inputScreen} type="number"/>
                </div>
            </div>
            <div className={stl.keyboard}>
                <Button name={"set"} callBack={set} />
            </div>
        </div>
    );
};

export default Counter;