import React, {useState} from 'react';
import style from './Button.module.css';
import {ButtonInterface} from "../../../models";

export const Button: React.FC<ButtonInterface> = (props): JSX.Element => {
    const [btnTitle, setBtnTitle] = useState(props.name);

    const changeButtonInfo = (e: React.FormEvent<any>, changeFunction: (a: string) => any) => {
        changeFunction(e.currentTarget.value);
    }

    return (
        <div className={style.btn}>
            <div className={style.title} onClick={props.func}>{btnTitle}</div>
            <div className={style.buttonBlock}>
                <div>
                    <input
                        type="text"
                        placeholder={'Имя кнопки'}
                        onChange={e => changeButtonInfo(e, setBtnTitle)}
                        value={btnTitle}
                    />
                    <div>
                        {String(props.func)}
                    </div>
                </div>
            </div>
        </div>
    )
}