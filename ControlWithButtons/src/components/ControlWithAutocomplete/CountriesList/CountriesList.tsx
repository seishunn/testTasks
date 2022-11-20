import style from "./CountriesList.module.css";
import {CountryInfo} from "../../../api/apiService";
import React from "react";
import {Country} from "./Country/Country";
import {observer} from "mobx-react-lite";
const { v4: uuidv4 } = require('uuid');


interface PropsInterface {
    countriesList: Array<CountryInfo>
    maxLength: number
    id: number,
    selectCountry: (country: CountryInfo, id: number) => void
}

export const CountriesList: React.FC<PropsInterface> = observer((
    {
        countriesList,
        maxLength,
        id,
        selectCountry
    }): JSX.Element => {

    return (
        <div className={style.countries}>
            {countriesList?.length > 0?
                countriesList.map((c: CountryInfo) => <Country
                    id={id}
                    country={c}
                    selectCountry={selectCountry}
                    key={uuidv4()}
                />).slice(0, maxLength)
                : 'Массив пуст'
            }
        </div>
    )
})