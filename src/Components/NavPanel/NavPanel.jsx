import '../List/_Icons.css'
import '../NavPanel/_NavPanel.css'
import { useDispatch } from 'react-redux';
import { userCheck } from '../../redux/actions';
import {Link} from 'react-router-dom'

export function NavPanel() {

const dispatch = useDispatch();

const userHandler = () => {
    dispatch(userCheck());
};  
return (
    <div className="nav-panel">
        <Link to='/profile' className="nav-btn">
            <div className="icon-profile"></div>
        </Link>
        <Link to='/list' className="nav-btn" onClick={userHandler}>
            <div className="icon-list"></div>
        </Link>
        <Link to='/edit' className="nav-btn" onClick={userHandler}>
            <div className="icon-edit"></div>
        </Link>
    </div>
);
}