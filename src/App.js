
import { Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Logon from './components/Logon';
import ImageBg from './assets/login.svg';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Logon />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      {/*<div className='image'>
        <img src={ImageBg} alt='' />
  </div>*/}
    </div>
  )
}

export default App;
