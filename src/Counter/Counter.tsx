import React from 'react';
import stl from "./Counter.module.css"
import Button from "./Button/Button";
const Counter = () => {
    return (
        <div className={stl.wrapper}>
            <div className={stl.screen}></div>
            <div className={stl.keyboard}>
                <Button/>
                <Button/>
            </div>
        </div>
    );
};

export default Counter;