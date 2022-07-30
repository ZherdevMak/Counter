import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import CounterSet from "./Counter/CounterSet";
import {useSelector} from "react-redux";
import {AppStateType} from "./bll/store";


function App() {
    // объявляем локальный стэйт для хранения данных об отображении вида счетчика
    let [toggleView, setToggleView] = useState<boolean>(true)
    // достаем стэйт
    const state = useSelector<AppStateType, AppStateType>(state => state)
   // функция переключения вида
    const setView = () => {
        setToggleView(!toggleView)
    }
    return (
        <div className="App">
            {toggleView
                ? <Counter value={state.counterValue.value} setView={setView}/>
                : <CounterSet setView={setView}/>}
        </div>
    );
}

export default App;
