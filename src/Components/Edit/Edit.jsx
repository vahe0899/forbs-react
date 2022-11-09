import '../Edit/_Forbs.css';
import '../Edit/_Table.css';
import '../Edit/_Modal.css';
import '../Edit/_Form&buttons.css';
import uniqid from 'uniqid';
import { useDispatch, useSelector } from 'react-redux';
import { inputFirstName, inputLastName, inputMoney, addRow } from '../../redux/actions';
import { Row } from '../Row/Row';
import { ModalWindow } from '../ModalWindow/ModalWindow';

export function Edit(props) {

const listItems = useSelector(state => {
    return state.editReducer.array
});

const firstNameText = useSelector(state => {
    return state.editReducer.firstName
});

const lastNameText = useSelector(state => {
    return state.editReducer.lastName
});

const moneyText = useSelector(state => {
    return state.editReducer.money
});

const modalIsOpen = useSelector(state => {
    return state.editReducer.modalWindowCondition
});

const dispatch = useDispatch();

const firstNameChangeHandler = (event) => {
    dispatch(inputFirstName(event.target.value));
};  

const lastNameChangeHandler = (event) => {
    dispatch(inputLastName(event.target.value));
};

const moneyChangeHandler = (event) => {
    dispatch(inputMoney(event.target.value));
};

const addRowHandler = () => {
    const id = uniqid();
    dispatch(addRow(id, firstNameText, lastNameText, moneyText))
};

return (
<div className="container">
    {modalIsOpen && <ModalWindow />}
    <div className="section-left">
        <h1 className="form-title">Форма для участия</h1>
        <div className="top-forms">
            <div className="text">
                <label className='label'>Введите имя</label>
                <input type="text" value={firstNameText} onChange={ firstNameChangeHandler }></input>
            </div>
            <div className="text">
                <label className='label'>Введите фамилию</label>
                <input type="text" value={lastNameText} onChange={ lastNameChangeHandler }></input>
            </div>
        </div>
        <div className="bottom-forms">
            <div className="text">
                <label className='label'>Сумма денег в рублях</label>
                <input type="number" value={moneyText} onChange={ moneyChangeHandler }></input>
            </div>
        </div>
        <div className="panel">
            <div className="btn-left" onClick={ addRowHandler }>
                <div className="icon-add">
                </div>
            </div>
            <div className="btn-left">
                <div className="icon-write">
                </div>
            </div>
        </div>
    </div>

    <div className="section-right">
        <div className="div-table">
            <div className="div-table-head">
                <div className="name-div-table-cell">ФИО</div>
                <div className="money-div-table-cell">Состояние ₽</div>
                <div className="money-div-table-cell">Состояние $</div>
            </div>
            <div className="div-table-body">
                { listItems.map((item) => (<Row key={item.id} data={item} />))}
            </div>
        </div>
        <div className="end-title">
            <h2>Список FORBES</h2>
        </div>
    </div>
</div>
)
}