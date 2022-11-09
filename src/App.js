import {Edit} from './Components/_edit'
import LoginWindow from './Components/Login/LoginWindow'
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import {NavPanel} from './Components/NavPanel/NavPanel'
import List from './Components/List/List'
import { useSelector } from 'react-redux'

function App(props) {

  const invalidUser = useSelector(state => {
    return state.loginReducer.invalidUser
  });

  return (
    <BrowserRouter>
        <NavPanel />
        <Routes>
        <Route path='/profile' element={<LoginWindow />} />
        <Route path='/edit' element={invalidUser && <Edit />}/>
        <Route path='/list' element={invalidUser && <List />}/>
        </Routes>      
    </BrowserRouter>
  );
}

export default App;