import {Edit} from './Components/_edit'
import LoginWindow from './Components/Login/LoginWindow'
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import {NavPanel} from './Components/NavPanel/NavPanel'
import List from './Components/List/List'
import { useSelector } from 'react-redux'

function App(props) {

  const validUser = useSelector(state => {
    return state.loginReducer.validUser
  });

  return (
    <BrowserRouter>
        <NavPanel />
        <Routes>
        <Route path='/profile' element={<LoginWindow />} />
        <Route path='/edit' element={validUser && <Edit />}/>
        <Route path='/list' element={validUser && <List />}/>
        </Routes>      
    </BrowserRouter>
  );
}

export default App;