import React from 'react';
import style from './Button.module.css';
import {ButtonInterface} from "../../../models";

export const Button: React.FC<ButtonInterface> = ({
        func,
        id,
        name
    }): JSX.Element => {
    return (
        <div className={style.btn}>
            <button
                className={style.button59}
                role="button"
                onClick={() => func(id)}
            >{name}</button>
        </div>
    )
}