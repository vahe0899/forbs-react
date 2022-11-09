import { INPUT_LOGIN, INPUT_PASSWORD, CHECK_VALIDATION, REGISTRATION, USER_CHECK } from "./types";

const initialState = {
    users: [{
        login: "vahe",
        password: "1234"
    },{
        login: "alex",
        password: "1234"
    }],

    login: '',
    password: '',
    invalidUser: true,
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
}

export const loginReducer = (state = initialState, action) => {
    console.log("STATE>>>", state)
    switch (action.type) {
        case USER_CHECK:
            if (state.invalidUser === true)
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
                    alert("Вход выполнен!");
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
                    shortPassword: true
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
                    shortPassword: false                    
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
                    shortPassword: true
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
            shortPassword: false
            };

        default:
            return state
    }
}