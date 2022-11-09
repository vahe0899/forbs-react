import { ADD_ROW, DELETE_ROW, EDIT_ROW, INPUT_FIRSTNAME, INPUT_LASTNAME, INPUT_MONEY, CLOSE_MODAL } from "./types";
import axios from 'axios'

const initialState = {
    array: [
{
    id: 1,
    firstName: "Анастасия",
    lastName: "Грекова",
    money: "1000000"
}, {
    id: 2,
    firstName: "Макар",
    lastName: "Никулин",
    money: "2316549"
}, {
    id: 3,
    firstName: "Лев",
    lastName: "Егоров",
    money: "7854126"
}, {
    id: 4,
    firstName: "Ксения",
    lastName: "Фетисова",
    money: "3652148"
}, {
    id: 5,
    firstName: "Екатерина",
    lastName: "Кузнецова",
    money: "1546235"
}, {
    id: 6,
    firstName: "Сергей",
    lastName: "Егоров",
    money: "45632897"
}, {
    id: 7,
    firstName: "Матвей",
    lastName: "Лазарев",
    money: "5463289"
}, {
    id: 8,
    firstName: "Александра",
    lastName: "Елисеева",
    money: "6573128"
}, {
    id: 9,
    firstName: "Алиса",
    lastName: "Егорова",
    money: "8654231"
}, {
    id: 10,
    firstName: "Никита",
    lastName: "Сергеев",
    money: "9032145"
}
],

    modalWindowCondition: false,
    rowEditCondition: false,
    firstName: '',
    lastName: '',
    money: '',
    text: '',
    editingRowId: '',
    USD: '',
}

axios.get("https://www.cbr-xml-daily.ru/daily_json.js").then((res) => {
    initialState.USD = res.data.Valute.USD.Value;
})

export const editReducer = (state = initialState, action) => {
    switch (action.type) {

        case INPUT_FIRSTNAME:
            return {
            ...state,
            firstName: action.firstName
            };

        case INPUT_LASTNAME:
            return {
            ...state,
            lastName: action.lastName
            };

        case INPUT_MONEY:
            return {
            ...state,
            money: action.money
            };

        case CLOSE_MODAL:
            return {
            ...state,
            modalWindowCondition: false,
            };

        case ADD_ROW:
            if (action.data.firstName === '' || action.data.lastName === '' || action.data.money === '') {
                return {
                    ...state,
                    modalWindowCondition: true
                }
            } else if (state.rowEditCondition == false) {
                return {
                ...state,
                array: [...state.array, action.data],
                firstName: '',
                lastName: '',
                money: '',
            }} else if (state.rowEditCondition == true) {
                const itemIndex = state.array.findIndex(element => element.id === state.editingRowId);
                const nextArray = [
                ...state.array.slice(0, itemIndex),
                action.data,
                ...state.array.slice(itemIndex + 1)
                ];
                return {
                ...state,
                array: nextArray,
                rowEditCondition: false,
                firstName: '',
                lastName: '',
                money: '',
                }
            };
            

        case DELETE_ROW:
            const itemIndex = state.array.findIndex(element => element.id === action.id);
            const nextArray = [
            ...state.array.slice(0, itemIndex),
            ...state.array.slice(itemIndex + 1)
            ];

            return {
                ...state,
                array: nextArray
            };

            case EDIT_ROW:
            return {
            ...state,
            firstName: action.data.firstName,
            lastName: action.data.lastName,
            money: action.data.money,
            rowEditCondition: true,
            editingRowId: action.data.id
            };

        default:
            return state
    }
}