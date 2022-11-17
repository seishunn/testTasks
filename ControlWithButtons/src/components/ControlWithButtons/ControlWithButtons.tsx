import React from 'react';
import {Button} from "./Button/Button";

type ButtonsType = {
    name: string
    func: string
}

type PropsType = {
    buttonsLeft: Array<ButtonsType>
    buttonsRight: Array<ButtonsType>

}

const obj = {
    name: 'dawdawd',
    func: 'dadwadaw'
}
const obj1: ButtonsType = {
    name: 'dawdawd',
    func: 'dadwadaw'
}

export const ControlWithButtons: React.FC<PropsType> = ({
                                                        buttonsLeft = [obj, obj, obj],
                                                        buttonsRight = [obj, obj, obj]
                                                        }): JSX.Element => {
    return (
        <div>
            {buttonsLeft.map((e: ButtonsType) => {
                return <Button name={e.name} func={e.func}/>
            })}
            <input type="text" placeholder={'Aboba'}/>
            {buttonsRight.map((e: ButtonsType) => {
                return <Button name={e.name} func={e.func}/>
            })}
        </div>
    )
}