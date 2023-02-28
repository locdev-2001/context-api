import React, {useContext} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './context/auth-context';

function App() {
  const authCtxProvider = useContext(AuthContext)
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!authCtxProvider.isLoggedIn && (
          <Login/>
        )}
        {authCtxProvider.isLoggedIn && (
          <Home/>
        )}
      </main>
    </React.Fragment>
  );
}

export default App;
