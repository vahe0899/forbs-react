import '../Login/_Login.css'
import '../List/_Icons.css'
import {connect} from 'react-redux'
import { inputLogin, inputPassword, checkValidation } from '../../redux/actions'

function LoginWindow(props) {
    console.log(props)
    return ( 
    <div className ="page-container">
          <div className="login-window">
            <h2 className="login-title">Sign in</h2>
            <div className="forms">
                <div className="text">
                    <label className={props.style.login}>Введите Логин</label>
                    <input type="text" style={{borderBottomColor: props.style.bottomBorderLogin}} onChange={props.inputLoginHandler} value={props.login}></input>
                    {props.isLoginEmpty && <label className="bottom-label" style={{color: "red"}}>для продолжения заполните поле</label>}

                </div>
                <div className="text">
                    <label className={props.style.password}>Введите Пароль</label>
                    <input type="text" style={{borderBottomColor: props.style.bottomBorderPassword}} onChange={props.inputPasswordHandler} value={props.password}></input>
                    {props.isPasswordEmpty && <label className="bottom-label" style={{color: "red"}}>для продолжения заполните поле</label>}
                </div>
            </div>    
            <button className="btn-login" onClick={props.validationHandler}>Login</button>
        </div>
    </div>
    )
}

function mapDispatchToProps(dispatch) {
  return {
    inputPasswordHandler: (event) => {
        const text = event.target.value;
        dispatch(inputPassword(text));
    },

    inputLoginHandler: (event) => {
        const text = event.target.value;
        dispatch(inputLogin(text));
    },

    validationHandler: () => {
        dispatch(checkValidation());
    },
  }
}

function mapStateToProps(state) {
  return {
    login: state.loginReducer.login,
    password: state.loginReducer.password,
    isLoginEmpty: state.loginReducer.emptyLogin,
    isPasswordEmpty: state.loginReducer.emptyPassword,
    style: state.loginReducer.style
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginWindow)