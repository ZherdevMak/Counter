import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import CounterSet from "./Counter/CounterSet";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {resetValueAC} from "./bll/counterValue-reducer";


function App() {
    let [toggleView, setToggleView] = useState<boolean>(true)
    let [value, setValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    let [startValue, setStartValue] = useState<number>(0)
    const state = useSelector<AppStateType,AppStateType>(state => state)
    const dispatch = useDispatch()
    // const setStartValueFunction = (startValueData: number) => {
    //     setStartValue(startValueData)
    //     setValue(startValueData)
    // }
    // const setMaxValueFunction = (maxValueData: number) => {
    //     setMaxValue(maxValueData)
    // }



    const setView = () => {debugger

        setToggleView(!toggleView)

    }
    return (
        <div className="App">
            {toggleView ? <Counter value={state.counterValue.value}
                                   setView={setView}/> :
                <CounterSet
                             setView={setView}/>}
        </div>
    );
}

export default App;
