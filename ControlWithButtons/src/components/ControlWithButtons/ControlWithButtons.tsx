import React, {useState} from 'react';
import {Button} from "./Button/Button";
import {ButtonInterface} from "../../models";
import {observer} from "mobx-react-lite";
import buttons, {ButtonsArrayInterface} from "../../store/buttons";

type PropsType = {
    control: ButtonsArrayInterface,
    id: number
}


export const ControlWithButtons:React.FC<PropsType> = observer(({
        control,
        id
    }: PropsType): JSX.Element => {

    return (
        <div>
            {control.buttonsLeft.map((e: ButtonInterface) => {
                return <Button name={e.name} func={e.func}/>
            })}
            <input
                type="text"
                value={control.inputText}
                onChange={(e: any) => buttons.updateInputText(e.target.value, id)}
            />
            {control.buttonsRight.map((e: ButtonInterface) => {
                return <Button name={e.name} func={e.func}/>
            })}
        </div>
    )
})