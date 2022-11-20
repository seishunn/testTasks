import {CountryInfo} from "./api/apiService";

export interface ButtonInterface {
    id: number
    name: string
    func: (id: number) => any
}

export interface ButtonsListInterface {
    id: number
    arrayOfItems: Array<ButtonInArrayInterface>
}

export interface ButtonsArrayInterface {
    id: number
    inputText: string
    buttonsLeft: Array<ButtonInArrayInterface>
    buttonsRight: Array<ButtonInArrayInterface>
}
export interface ButtonInArrayInterface {
    name: string
    func: (id: number) => any
}

export interface ControlListInterface {
    id: number
    maxLength: number
    searchName: string
    countriesList: Array<CountryInfo>
    updateSearchCountryName?: () => any
}
