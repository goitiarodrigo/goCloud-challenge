
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom"
import CallsDetails from './pages/CallsDetails';
import Login from './pages/Login';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';

const App = () => {

  const { userState } = useContext(UserContext)
  const { token } = userState
  
  
  return (
      <Routes>
        {!token ? <Route path="login" element={<Login />} /> : null}
        {token ? <Route path="details" element={<CallsDetails />} /> : null}
        <Route path="*" element={<Navigate to={!token ? "login" : "details"} />} />
      </Routes>
  );
}

export default App;
