import '../List/_Icons.css'
import '../NavPanel/_NavPanel.css'
import { useDispatch } from 'react-redux';
import { userCheck } from '../../redux/actions';

export function NavPanel() {

const dispatch = useDispatch();

const userHandler = () => {
    dispatch(userCheck());
};  
return (
    <div className="nav-panel">
        <a href='/profile' className="nav-btn">
            <div className="icon-profile"></div>
        </a>
        <a href='/list' className="nav-btn" onClick={userHandler}>
            <div className="icon-list"></div>
        </a>
        <a href='/edit' className="nav-btn" onClick={userHandler}>
            <div className="icon-edit"></div>
        </a>
    </div>
);
}