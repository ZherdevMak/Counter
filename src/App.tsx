import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter/Counter";
import CounterSet from "./Counter/CounterSet";

function App() {
    let [toggleView,setToggleView] = useState<boolean>(true)
    const setView = () => {
        setToggleView(!toggleView)
    }
    return (
        <div className="App">
            {toggleView ? <Counter setView = {setView}/> : <CounterSet setView = {setView}/>}
        </div>
    );
}

export default App;
