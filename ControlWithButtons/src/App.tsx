import React from "react";
import "./App.css";
import {observer} from "mobx-react-lite";
import buttons, {ButtonsArrayInterface} from "./store/buttons";
import {ControlWithAutocomplete} from "./components/ControlWithAutocomplete/ControlWithAutocomplete";
import countries, {ControlListInterface} from "./store/countries";
import {toJS} from "mobx";
import {ButtonInterface} from "./models";
const {ControlWithButtons} = require("./components/ControlWithButtons/ControlWithButtons");

const App = observer(() => {
    return (
        <div className='App'>
            {buttons.controlList.map((control: ButtonsArrayInterface) => {
                return <ControlWithButtons
                    control={control}
                    key={control.id}
                    id={control.id}
                />
            })}
            {countries.controlList.map((c: ControlListInterface) => {
                return <ControlWithAutocomplete control={c} maxLength={c.maxLength} key={c.id}/>
            })}
        </div>
    );
})

export default App;
