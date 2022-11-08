import modalImg from '../assets/robot.png';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalWindow } from '../../redux/actions';

export function ModalWindow() {

    const dispatch = useDispatch();

    const modalWindowHandler = () => {
    dispatch(closeModalWindow())
    };

    return (
        <div className="modal">
        <div className="dialogue">
            <div className="modal-section-left">
                <img className="robot" src={modalImg}></img>
            </div>
            <div className="modal-section-right">
                <div className="txt">Необходимо заполнить все поля</div>
                <button className="btn" onClick={modalWindowHandler} >ОК</button>
            </div>
        </div>
    </div>
    )
}