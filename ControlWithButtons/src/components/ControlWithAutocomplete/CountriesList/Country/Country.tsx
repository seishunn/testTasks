import style from './Country.module.css';
import React from "react";
import {CountryInfo} from "../../../../api/apiService";

interface PropsInterface {
    country: CountryInfo
    id: number
    selectCountry: (country: CountryInfo, id: number) => void
}

export const Country: React.FC<PropsInterface> = (
    {
        country,
        id,
        selectCountry
    }): JSX.Element => {
    return (
        <div onClick={() => selectCountry(country, id)}>
            <div>
                <div className={style.name}>{country.name}</div>
                <div className={style.fullName}>{country.fullName}</div>
            </div>
            <div className={style.flag}>
                <img src={country.flag} alt=""/>
            </div>
        </div>
    )
}