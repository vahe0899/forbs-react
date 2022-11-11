import {USER_CHECK, REGISTRATION, EDIT_ROW, DELETE_ROW, ADD_ROW, 
MONEY_FILTER, NAME_FILTER, INPUT_SEARCH,CHECK_VALIDATION, INPUT_FIRSTNAME, 
INPUT_LASTNAME, INPUT_MONEY, CLOSE_MODAL, INPUT_LOGIN, INPUT_PASSWORD, LIST_STATE_CHANGE } from "./types";

export function filterByMoney() {
    return {
        type: MONEY_FILTER
    }
};

export function filterByName() {
    return {
        type: NAME_FILTER
    }
};

export function Search(text) {
    return {
        type: INPUT_SEARCH,
        text: text
    }
};

export function inputFirstName(text) {
    return {
        type: INPUT_FIRSTNAME,
        firstName: text
    }
};

export function inputLastName(text) {
    return {
        type: INPUT_LASTNAME,
        lastName: text
    }
};

export function inputMoney(text) {
    return {
        type: INPUT_MONEY,
        money: text
    }
};

export function addRow(id, firstName, lastName, money) {
    return {
        type: ADD_ROW,
        data: {
            id: id,
            firstName: firstName,
            lastName: lastName,
            money: money,
        }
    }
};

export function deleteRow(id) {
    return {
        type: DELETE_ROW,
        id: id
    }
};

export function editRow(id, firstName, lastName, money) {
    return {
        type: EDIT_ROW,
        data: {
            id: id,
            firstName: firstName,
            lastName: lastName,
            money: money,
        }
    }
};

export function closeModalWindow() {
    return {
        type: CLOSE_MODAL,
    }
};

export function inputLogin(text) {
    return {
        type: INPUT_LOGIN,
        text: text
    }
};

export function inputPassword(text) {
    return {
        type: INPUT_PASSWORD,
        text: text
    }
};

export function checkValidation() {
    return {
        type: CHECK_VALIDATION    
    }
};

export function registration() {
    return {
        type: REGISTRATION
    }
};

export function userCheck() {
    return {
        type: USER_CHECK
    }
};

export function listChange(data) {
    return {
        type: LIST_STATE_CHANGE,
        data: data
    }
};
