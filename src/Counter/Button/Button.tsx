import React from 'react';
import stl from './Button.module.css'

const Button = () => {
    return (
        <div>
           <button className={stl.button}></button>
        </div>
    );
};

export default Button;