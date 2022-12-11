import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import {AuthProvider} from './context/authContext';


export function App() {
 return (
  <div className='bg-slate-300 h-screen text-black flex'>
    <AuthProvider>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
     </Routes>
    </AuthProvider>
  </div>
 )  

}

export default App