
import './App.css';

import { UserProvider } from './context/UserProvider';
import CallsDetails from './pages/CallsDetails';
import Login from './pages/Login';

const App = () => {
  return (
    <UserProvider>
      {/* <CallsDetails /> */}
      <Login />
    </UserProvider>
  );
}

export default App;
