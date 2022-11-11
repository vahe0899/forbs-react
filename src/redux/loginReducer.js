import { LIST_STATE_CHANGE, ADD_ROW, DELETE_ROW, EDIT_ROW, INPUT_FIRSTNAME, INPUT_LASTNAME, 
    INPUT_MONEY, CLOSE_MODAL, NAME_FILTER, MONEY_FILTER, INPUT_SEARCH, INPUT_LOGIN, 
    INPUT_PASSWORD, CHECK_VALIDATION, REGISTRATION, USER_CHECK } from "./types";
import axios from 'axios';

let moneySortCondition = '';
let nameSortCondition = '';

const initialState = {
    array: [{
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
    }],
    
    users: [],
    acceptedArray: [],
    modalWindowCondition: false,
    rowEditCondition: false,
    nameSortCondition,
    moneySortCondition,
    firstName: '',
    lastName: '',
    money: '',
    text: '',
    editingRowId: '',
    text: '',
    USD: '',
    login: '',
    password: '',
    validUser: false,
    emptyLogin: '',
    emptyPassword: '',
    shortLogin: '',
    shortPassword: '',
    style: {
        login: 'top-label',
        password: 'top-label',
        bottomBorderLogin: '',
        bottomBorderPassword: ''
    },
};

axios.get("https://www.cbr-xml-daily.ru/daily_json.js").then((res) => {
    initialState.USD = res.data.Valute.USD.Value;
})

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_CHECK:
            if (state.validUser === false)
            alert('Доступ заблокирован. Необходимо войти в систему')   
            return {...state}

        case INPUT_PASSWORD:
            return {
            ...state,
            password: action.text
            };

        case INPUT_LOGIN:
            return {
            ...state,
            login: action.text
            };

        case CHECK_VALIDATION:

            if (state.login === '' && state.password === '') {
                return {
                    ...state,
                    style: {
                        ...state.style,
                        login: 'top-label-red',
                        password: 'top-label-red',
                        bottomBorderLogin: 'red',
                        bottomBorderPassword: 'red'
                    },
                    emptyLogin: true,
                    emptyPassword: true,
                    shortLogin: false,
                    shortPassword: false
                }
            };

            if (state.login === '' && state.password !== '') {
                return {
                    ...state,
                    style: {
                        ...state.style,
                        login: 'top-label-red',
                        password: 'top-label',
                        bottomBorderLogin: 'red',
                        bottomBorderPassword: ''
                    },
                    emptyLogin: true,
                    emptyPassword: false,     
                    shortLogin: false,
                    shortPassword: false          
                }
            };

            if (state.login !== '' && state.password === '') {
                 return {
                    ...state,
                    style: {
                        ...state.style,
                        password: 'top-label-red',
                        login: 'top-label',
                        bottomBorderLogin: '',
                        bottomBorderPassword: 'red'
                    },
                    emptyLogin: false,
                    emptyPassword: true,
                    shortPassword: false,
                    shortLogin: false 
                }
            };

            state.users.forEach((user) => {
                if (state.login === user.login && state.password === user.password) {
                    alert("Вход выполнен!");
                    state.validUser = true
                }
            })

            if (state.validUser === false) {
                alert("Неправильный логин или пароль")
            }

            return {
            ...state,
            style: {
                ...state.style,
                password: 'top-label',
                login: 'top-label',
                bottomBorderLogin: '',
                bottomBorderPassword: ''
            },
            emptyLogin: false,
            emptyPassword: false,
            shortLogin: false,
            shortPassword: false,
            };

        case REGISTRATION:

            if (state.login.length <= 3 && state.password.length <= 3) {
                return {
                    ...state,
                    style: {
                        ...state.style,
                        login: 'top-label-red',
                        password: 'top-label-red',
                        bottomBorderLogin: 'red',
                        bottomBorderPassword: 'red'
                    },
                    shortLogin: true,
                    shortPassword: true,
                    emptyLogin: false,
                    emptyPassword: false
                }
            };

            if (state.login.length <= 3 && state.password.length >= 3) {
                return {
                    ...state,
                    style: {
                        ...state.style,
                        login: 'top-label-red',
                        password: 'top-label',
                        bottomBorderLogin: 'red',
                        bottomBorderPassword: ''
                    },
                    shortLogin: true,
                    shortPassword: false,
                    emptyLogin: false,
                    emptyPassword: false                    
                }
            };

            if (state.login.length >= 3 && state.password.length <= 3) {
                 return {
                    ...state,
                    style: {
                        ...state.style,
                        password: 'top-label-red',
                        login: 'top-label',
                        bottomBorderLogin: '',
                        bottomBorderPassword: 'red'
                    },
                    shortLogin: false,
                    shortPassword: true,
                    emptyLogin: false,
                    emptyPassword: false
                }
            };

            alert("Пользователь успешно зарегистрирован!")
            return {
            ...state,
            users: [...state.users, {login: state.login, password: state.password}],
            style: {
                ...state.style,
                password: 'top-label',
                login: 'top-label',
                bottomBorderLogin: '',
                bottomBorderPassword: ''
            },
            login: '',
            password: '',
            shortLogin: false,
            shortPassword: false,
            emptyLogin: false,
            emptyPassword: false
            };


        case MONEY_FILTER:
            const moneyArray = [];
            if (state.moneySortCondition === '' || state.moneySortCondition === 'sorted-reverse') {
                state.acceptedArray.forEach(element => moneyArray.push(element));
                return {
                    ...state,
                    acceptedArray: moneyArray.sort((prev, next) => next.money - prev.money),
                    moneySortCondition: 'sorted'
                };
            } else if (state.moneySortCondition === 'sorted') {
                state.acceptedArray.forEach(element => moneyArray.push(element));
                return {
                    ...state,
                    acceptedArray: moneyArray.sort((prev, next) => prev.money - next.money),
                    moneySortCondition: 'sorted-reverse'
                };
            }
            
        case NAME_FILTER:
            const nameArray = [];
            if (state.nameSortCondition === '' || state.nameSortCondition === 'sorted-reverse') {
            state.acceptedArray.forEach(element => nameArray.push(element));
            return {
                ...state,
                acceptedArray: nameArray.sort((prev, next) => {
                        if ( prev.firstName < next.firstName ) {return -1};
                        if ( prev.firstName < next.firstName ) {return 1};
                       }),
                nameSortCondition: 'sorted'
            };
        } else if (state.nameSortCondition === 'sorted') {
            state.acceptedArray.forEach(element => nameArray.push(element));
            return {
                ...state,
                acceptedArray: nameArray.sort((prev, next) => {
                        if ( prev.firstName > next.firstName ) {return -1};
                        if ( prev.firstName > next.firstName ) {return 1};
                       }),
                nameSortCondition: 'sorted-reverse'
            };
        }

        case INPUT_SEARCH:
            let searchArray = [];
            searchArray.splice(0, searchArray.length)
            state.acceptedArray.forEach((item) => {
            if (item.firstName.slice(0, action.text.length).toLowerCase() === action.text.toLowerCase() || item.lastName.slice(0, action.text.length).toLowerCase() === action.text.toLowerCase()) {
                searchArray.push(item)
            }});

            return {
            ...state,
            text: action.text,
            searchedArray: searchArray
            }

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
            if (state.rowEditCondition == true) {
                alert('Необходимо завершить редактирование')
                break
            }
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

        case LIST_STATE_CHANGE:
            alert("Данные успешно занесены в список!")
            return {
                ...state,
                acceptedArray: action.data,
                text: '',
                searchedArray: undefined
            }
            
        default:
            return state
    }
}