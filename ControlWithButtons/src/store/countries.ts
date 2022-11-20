import {makeAutoObservable} from "mobx";
import {CountryInfo, getCountryByName} from "../api/apiService";
import {ButtonsArrayInterface, ControlListInterface} from "../models";


export const getNewArray = (arrayForChange: Array<ControlListInterface | ButtonsArrayInterface>, id: number, callback: any) => {
    return arrayForChange.map((control: ControlListInterface | ButtonsArrayInterface) => {
        if (control.id === id) {
            const response = callback();
            return {
                ...control,
                ...response
            };
        }
        return control;
    });
}

class Countries {
    controlList: Array<ControlListInterface> = [
        {id: 1, maxLength: 3, searchName: '', countriesList: []},
        {id: 2, maxLength: 10, searchName: '', countriesList: []},
    ]

    constructor() {
        makeAutoObservable(this, {}, {deep: true});
        this.updateSearchCountryName = this.updateSearchCountryName.bind(this);
        this.selectCountry = this.selectCountry.bind(this);
    }

    setCountries(countriesArray: Array<CountryInfo>, id: number) {
        this.controlList = this.controlList.map((control: any) => {
            if (control.id === id) {
                return {
                    ...control,
                    countriesList: countriesArray.slice(0, control.maxLength)
                };
            }
            return control;
        });
    }

    updateSearchCountryName (countryName: string, id: number) {
        const callback = () => {
            this.getPrompts(countryName, id);
            return {
                searchName: countryName,
            }
        }
        this.controlList = getNewArray(this.controlList, id, callback);
    }

    getPrompts (countryName: string, id: number) {
        getCountryByName(countryName)
            .then((response: any) => this.setCountries(response, id))
    }

    selectCountry (country: CountryInfo, id: number) {
        this.updateSearchCountryName(country.name, id);
    }
}

export default new Countries();