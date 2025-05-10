import Login from './Login';
import Register from './Register';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Free from './Free';
import AuthComponent from './AuthComponent';
import ProtectedRoutes from './ProtectedRoutes';

function App() {
  return (
    <Router>
    <container style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:25}}>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",padding:25}}>
        <Link to="/login" style={{padding:30}}>Login</Link>
        <Link to="/free"  style={{padding:30}}>Free</Link>
        <Link to="/auth"  style={{padding:30}}>Authorized</Link>
      </div>
    <Routes> 
      <Route path='/' element={<Register/>}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/free'element={<Free />}></Route>
      <Route element={<ProtectedRoutes />}>
            <Route path='/auth' element={<AuthComponent />}></Route>
      </Route>
   </Routes>
   </container></Router>
        
    
  );
}

export default App;
