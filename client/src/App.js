import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/User/Dashboard';
import PrivateRoute from "./components/Routes/Private";


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home /> }  />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>  
        <Route path='/Register' element={<Register /> }  />
        <Route path='/Login' element={<Login /> }  />
        <Route path='/About' element={<About /> }  />
        <Route path='/Contact' element={<Contact /> }  />
        <Route path='/Policy' element={<Policy /> }  />
        <Route path='*' element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
