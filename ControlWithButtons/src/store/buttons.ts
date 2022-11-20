import {makeAutoObservable} from "mobx";
import { ButtonsArrayInterface} from "../models";
import {getNewArray} from "./countries";



class Buttons {
    controlList: Array<ButtonsArrayInterface> = [
        {id: 1, buttonsLeft: [], buttonsRight: [
                {name: 'Очистить содержимое', func: (id: number) => {this.updateInputText('', id)}},
                {name: 'Замена содержимого', func: (id: number) => {this.updateInputText('hello world!', id)}},
            ], inputText: ''},
        {id: 2, buttonsLeft: [
                {name: 'Проверка на число', func: (id: number) => {
                    if (!isNaN(Number(this.getInputText(id)))) {
                        alert(this.getInputText(id));
                    }
                }},
            ], buttonsRight: [
                {name: 'Показ текста в контроле', func: (id: number) => {
                    alert(this.getInputText(id));
                }},
            ], inputText: ''},
    ]

    constructor() {
        makeAutoObservable(this);
        this.updateInputText = this.updateInputText.bind(this);
    }

    updateInputText (text: string, id: number) {
        const callback = () => {
            return {
                inputText: text,
            }
        }
        this.controlList = getNewArray(this.controlList, id, callback);
    }

    getInputText (id: number): string {
        let str = '';

        this.controlList.forEach((control: any) => {
            if (control.id === id) {
                str = control.inputText;
            }
        });

        return str;
    }

}

export default new Buttons;