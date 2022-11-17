import React, {useState} from 'react';
import style from './Button.module.css';

export const Button = ({name = '', func = ''}): JSX.Element => {
    const [btnTitle, setBtnTitle] = useState(name as string);
    const [btnFunction, setBtnFunction] = useState(func as string);

    const changeButtonInfo = (e: React.FormEvent<any>, changeFunction: (a: string) => any) => {
        changeFunction(e.currentTarget.value);
    }

    const acceptChanges = () => {
        if (!btnFunction) {
            console.warn('Функция не задана');
        }
        try {
            eval(btnFunction);
        } catch (e) {
            console.warn('Извините, но функция не может запуститься');
            setBtnFunction(() => '');
        }
    }

    return (
        <div className={style.btn}>
            <div className={style.title} onClick={acceptChanges}>{btnTitle}</div>
            <div className={style.buttonBlock}>
                <div>
                    <input
                        type="text"
                        placeholder={'Имя кнопки'}
                        onChange={e => changeButtonInfo(e, setBtnTitle)}
                        value={btnTitle}
                    />
                </div>
                <div>
                    <textarea
                        placeholder={'Функция для кнопки'}
                        onChange={e => changeButtonInfo(e, setBtnFunction)}
                        value={btnFunction}
                    />
                </div>
            </div>
        </div>
    )
}