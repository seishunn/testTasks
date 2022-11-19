import {makeAutoObservable} from "mobx";
import {ButtonInterface} from "../models";
import {getNewArray} from "./countries";

export interface ButtonsArrayInterface {
    id: number
    buttonsLeft: Array<ButtonInterface>
    buttonsRight: Array<ButtonInterface>
    inputText: string
}

class Buttons {
    controlList: Array<ButtonsArrayInterface> = [
        {id: 1, buttonsLeft: [], buttonsRight: [
                {name: 'Очистить содержимое', func: () => {this.updateInputText('', 1)}},
                {name: 'Замена содержимого', func: () => {this.updateInputText('hello world!', 1)}},
            ], inputText: ''},
        {id: 2, buttonsLeft: [
                {name: 'Проверка на число', func: () => {alert('Это число')}},
            ], buttonsRight: [
                {name: 'Показ текста в контроле', func: () => {alert()}},
            ], inputText: ''},
    ]

    constructor() {
        makeAutoObservable(this);
    }

    updateInputText (text: string, id: number) {
        const callback = () => {
            return {
                inputText: text,
            }
        }
        this.controlList = getNewArray(this.controlList, id, callback);
    }
}

export default new Buttons;