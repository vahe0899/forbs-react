import {Edit} from './Components/_edit'
import LoginWindow from './Components/Login/LoginWindow'
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import {NavPanel} from './Components/NavPanel/NavPanel'
import List from './Components/List/List'

function App(props) {
  return (
    <BrowserRouter>
        <NavPanel />
        <Routes>
        <Route path='/profile' element={<LoginWindow />} />
        <Route path='/edit' element={<Edit />}/>
        <Route path='/list' element={<List />}/>
        </Routes>      
    </BrowserRouter>
  );
}

export default App;