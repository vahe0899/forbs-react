import { useDispatch, useSelector } from 'react-redux';
import { deleteRow, editRow } from '../../redux/actions';


const nameDivStyle = {
  width: '40%'
};

const moneyDivStyle = {
  width: '25%'
};

export function Row(props) {
    const dispatch = useDispatch();

    const deleteHandler = () => {
    dispatch(deleteRow(props.data.id))
    };

    const editHandler = () => {
    dispatch(editRow(props.data.id, props.data.firstName, props.data.lastName, props.data.money))
    };

    return (
        <div className="div-table-row" key={props.data.id}>
            <div className="div-table-cell" style={nameDivStyle}>{props.data.firstName + ' ' + props.data.lastName}</div>
            <div className="div-table-cell" style={moneyDivStyle}>{props.data.money}</div>
            <div className="div-table-cell" style={moneyDivStyle}>{props.data.money}</div>
            <div className="btn-right-delete" onClick={ deleteHandler }>
                <div className="icon-delete" ></div>
            </div>
            <div className="btn-right-edit" onClick={ editHandler }>
                <div className="icon-edit-black"></div>
            </div>
        </div>
    )
}