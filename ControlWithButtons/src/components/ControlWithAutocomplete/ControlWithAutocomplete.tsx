import style from './ControlWithAutocomplete.module.css';
import {observer} from "mobx-react-lite";
import {CountriesList} from "./CountriesList/CountriesList";
import React from "react";
import {Input} from "../Input/Input";
import {ControlListInterface} from "../../models";
import {CountryInfo} from "../../api/apiService";

interface PropsInterface {
    maxLength: number
    control: ControlListInterface,
    updateSearchCountryName: (countryName: string, id: number) => void,
    selectCountry: (country: CountryInfo, id: number) => void
}

export const ControlWithAutocomplete: React.FC<PropsInterface> = observer((
    {
        maxLength,
        control,
        updateSearchCountryName,
        selectCountry
    }): JSX.Element => {

    return (
        <div className={style.main}>
            <Input
                value={control.searchName}
                onChange={(e: any) => updateSearchCountryName(e.target.value, control.id)}
            />
            <CountriesList
                countriesList={control.countriesList}
                maxLength={maxLength}
                id={control.id}
                selectCountry={selectCountry}
            />
        </div>
    )
})