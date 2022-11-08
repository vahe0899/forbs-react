import { NAME_FILTER, MONEY_FILTER, INPUT_SEARCH } from "./types";

let moneySortCondition = '';
let nameSortCondition = '';

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

    text: ''
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case MONEY_FILTER:
            const moneyArray = [];
            if (moneySortCondition === '' || moneySortCondition === 'sorted-reverse') {
                state.array.forEach(element => moneyArray.push(element));
                moneySortCondition = 'sorted'
                return {
                    ...state,
                    array: moneyArray.sort((prev, next) => next.money - prev.money)
                };
            } else if (moneySortCondition === 'sorted') {
                state.array.forEach(element => moneyArray.push(element));
                moneySortCondition = 'sorted-reverse'
                return {
                    ...state,
                    array: moneyArray.sort((prev, next) => prev.money - next.money)
                };
            }
            
        case NAME_FILTER:
            const nameArray = [];
            if (nameSortCondition === '' || nameSortCondition === 'sorted-reverse') {
            state.array.forEach(element => nameArray.push(element));
            nameSortCondition = 'sorted'
            return {
                ...state,
                array: nameArray.sort((prev, next) => {
                        if ( prev.firstName < next.firstName ) {return -1};
                        if ( prev.firstName < next.firstName ) {return 1};
                       })
            };
        } else if (nameSortCondition === 'sorted') {
            state.array.forEach(element => nameArray.push(element));
            nameSortCondition = 'sorted-reverse'
            return {
                ...state,
                array: nameArray.sort((prev, next) => {
                        if ( prev.firstName > next.firstName ) {return -1};
                        if ( prev.firstName > next.firstName ) {return 1};
                       })
            };
        }

        case INPUT_SEARCH:
            let searchArray = [];
            searchArray.splice(0, searchArray.length)
            initialState.array.forEach((item) => {
            if (item.firstName.slice(0, action.text.length).toLowerCase() === action.text.toLowerCase() || item.lastName.slice(0, action.text.length).toLowerCase() === action.text.toLowerCase()) {
                searchArray.push(item)
            }});
            return {
            ...state,
            text: action.text,
            array: searchArray
            }

        default:
            return state
    }
}