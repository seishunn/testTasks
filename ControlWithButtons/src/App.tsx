import React from "react";
import "./App.css";
import {observer} from "mobx-react-lite";
import buttons from "./store/buttons";
import {ControlWithAutocomplete} from "./components/ControlWithAutocomplete/ControlWithAutocomplete";
import countries from "./store/countries";
import {ButtonsArrayInterface, ControlListInterface} from "./models";

const {ControlWithButtons} = require("./components/ControlWithButtons/ControlWithButtons");

const App = observer(() => {
    return (
        <div className='App'>
            {buttons.controlList.map((control: ButtonsArrayInterface) => {
                return <ControlWithButtons
                    control={control}
                    key={control.id}
                    id={control.id}
                    updateInputText={buttons.updateInputText}
                />
            })}
            {countries.controlList.map((c: ControlListInterface) => {
                return <ControlWithAutocomplete
                    control={c}
                    maxLength={c.maxLength}
                    key={c.id}
                    updateSearchCountryName={countries.updateSearchCountryName}
                    selectCountry={countries.selectCountry}
                />
            })}
        </div>
    );
})

export default App;
