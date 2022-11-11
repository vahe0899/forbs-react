import '../List/_List.css'
import '../List/_Icons.css'
import '../List/_Search&Filter.css'
import {connect} from 'react-redux'
import { filterByMoney, filterByName, Search } from '../../redux/actions'

function List(props) {
  
let listItems = props.searchedArray ? props.searchedArray : props.items
  return (
    <div className="list-page">
      <div className="top">
        <div className="features">
          <div className="filter-container">
            <div className="filter">
              <div className="filter-btn">
                <div className="icon-filter"></div>
              </div>
              <button className="button-search" onClick={props.filterMoney}>По состоянию</button>
              <button className="button-search" onClick={props.filterName}>По имени</button>
            </div>
          </div>
          <div className="search-container">
            <div className="search">
              <div className="search-btn">
                <div className="icon-search"></div>
              </div>
              <input type="text" placeholder="Поиск..." className="search-input" value={props.text} onChange={ props.searchInputChangeHandler }></input>
            </div>
          </div>
        </div>
      </div>
      <div className="list-table">
        <div className="list-table-head">
          <div className="name-head-table-cell">ФИО</div>
          <div className="ruble-head-table-cell">Состояние ₽</div>
          <div className="dollar-head-table-cell">Состояние $</div>
        </div>
        <div className="list-table-body">
          { listItems.map((item) => {
            return (
          <div className="list-table-row" key={item.id}>
            <div className="number-list-table-cell"><h2>{ listItems.indexOf(item) + 1 }</h2></div>
            <div className="name-list-table-cell">{item.firstName + ' ' + item.lastName}</div>
            <div className="ruble-list-table-cell">{item.money}</div>
            <div className="dollar-list-table-cell">{Math.round(item.money/props.valute)}</div>
          </div>
          )})}
        </div>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    filterMoney: () => {
      dispatch(filterByMoney());
    },

    filterName: () => {
      dispatch(filterByName());
    },

    searchInputChangeHandler: (event) => {
      const text = event.target.value;
      console.log(text);
      dispatch(Search(text))
    }
  }
};

function mapStateToProps(state) {
  return {
    items: state.loginReducer.acceptedArray,
    text: state.loginReducer.text,
    valute: state.loginReducer.USD,
    searchedArray: state.loginReducer.searchedArray,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(List)