import st from './Input.module.css';
import React from "react";

interface InputInterface {
    value: string
    onChange: (e: any) => any
}

export const Input: React.FC<InputInterface> = ({
        value,
        onChange
    }): JSX.Element => {
    return (
        <input
            className={st.inputArea}
            type="text"
            value={value}
            onChange={onChange}
        />
    )
}