import React, {useState} from 'react';
import stl from './App.module.css';
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
        <div >
            <div className={stl.wrapper}>
                {toggleView
                    ? <Counter value={state.counterValue.value} setView={setView}/>
                    : <CounterSet setView={setView}/>}
            </div>
        </div>

    );
}

export default App;
