import React from 'react';
import stl from './Button.module.css'

export type ButtonType = {
    name: string
    callBack: () => void
    disabled?: boolean
}
const Button = (props: ButtonType) => {
    return (
        <div>
            <button disabled={props.disabled} className={stl.button}
                    onClick={props.callBack}>{props.name}</button>
        </div>
    );
};

export default Button;