import React from 'react';
import {ButtonsArrayInterface} from "../../models";
import {observer} from "mobx-react-lite";
import {Input} from "../Input/Input";
import {ButtonsList} from "./ButtonsList";

interface PropsInterface {
    control: ButtonsArrayInterface,
    id: number
    updateInputText: any
}


export const ControlWithButtons:React.FC<PropsInterface> = observer(({
        control,
        id,
        updateInputText
    }): JSX.Element => {

    return (
        <div>
            <ButtonsList arrayOfItems={control.buttonsLeft} id={id}/>
            <Input
                value={control.inputText}
                onChange={(e: any) => updateInputText(e.target.value, id)}
            />
            <ButtonsList arrayOfItems={control.buttonsRight} id={id}/>
        </div>
    )
})