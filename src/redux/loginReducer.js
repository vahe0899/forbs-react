import { INPUT_LOGIN, INPUT_PASSWORD, CHECK_VALIDATION } from "./types";

const initialState = {
    users: [{
        userName: "First User",
        login: "vahe",
        password: "1234"
    },{
        userName: "Second User",
        login: "alex",
        password: "1234"
    }],


    login: '',
    password: '',
    invalidUser: true,
    emptyLogin: '',
    emptyPassword: '',
    style: {
        login: 'top-label',
        password: 'top-label',
        bottomBorderLogin: '',
        bottomBorderPassword: ''
    },
}

export const loginReducer = (state = initialState, action) => {
    console.log("login reducer>>>", action)
    switch (action.type) {

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
                    emptyPassword: true
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
                    emptyPassword: false                    
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
                    emptyPassword: true
                }
            };

            state.users.forEach((user) => {
                if (state.login === user.login && state.password === user.password) {
                    alert("Всё заебись!");
                    state.invalidUser = false
                }
            })

            if (state.invalidUser === true) {
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
            emptyPassword: false
            };

        default:
            return state
    }
}