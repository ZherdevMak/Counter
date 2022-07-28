import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import CounterSet from "./Counter/CounterSet";


function App() {
    let [toggleView, setToggleView] = useState<boolean>(true)
    let [value, setValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    let [startValue, setStartValue] = useState<number>(0)
    const setStartValueFunction = (startValueData: number) => {
        debugger
        setStartValue(startValueData)
        setValue(startValueData)
    }
    const setMaxValueFunction = (maxValueData: number) => {
        setMaxValue(maxValueData)
    }
    const changeValueFunction = () => {
        setValue(value + 1)
    }
    const resetValueFunction = () => {
        setValue(startValue)
    }

    const setView = () => {
        setToggleView(!toggleView)
    }
    return (
        <div className="App">
            {toggleView ? <Counter value={value} startValue={startValue} maxValue={maxValue} changeValueFunction={changeValueFunction}
                                   resetValueFunction={resetValueFunction} setView={setView}/> :
                <CounterSet startValue={startValue} maxValue={maxValue} setStartValueFunction={setStartValueFunction}
                            setMaxValueFunction={setMaxValueFunction} setView={setView}/>}
        </div>
    );
}

export default App;
