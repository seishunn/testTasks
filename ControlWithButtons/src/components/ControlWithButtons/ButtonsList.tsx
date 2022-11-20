import {Button} from "./Button/Button";
import React from "react";
import {ButtonsListInterface} from "../../models";
const { v4: uuidv4 } = require('uuid');

export const ButtonsList: React.FC<ButtonsListInterface> = ({
        arrayOfItems,
        id
    }): JSX.Element => {
    return (
        <>
            {arrayOfItems.map((e: any) => {
                return <Button
                    name={e.name}
                    func={e.func}
                    id={id}
                    key={uuidv4()}
                />
            })}
        </>
    )
}