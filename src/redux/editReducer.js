import { ADD_ROW, DELETE_ROW, EDIT_ROW, INPUT_FIRSTNAME, INPUT_LASTNAME, INPUT_MONEY, CLOSE_MODAL } from "./types";

const initialState = {
    array: [{
        id: 1,
        firstName: "Аааа",
        lastName: "Аааа",
        money: "3"
    }, {
        id: 2,
        firstName: "Вввв",
        lastName: "Вввв",
        money: "1"
    }, {
        id: 3,
        firstName: "аббб",
        lastName: "Бббб",
        money: "2"
    }, {
        id: 4,
        firstName: "Гггг",
        lastName: "Гггг",
        money: "4"
    }],

    modalWindowCondition: false,
    rowEditCondition: false,
    firstName: '',
    lastName: '',
    money: '',
    text: '',
    editingRowId: ''
}

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