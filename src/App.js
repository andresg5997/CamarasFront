import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';

import AOS from 'aos';
import { focusHandling } from 'cruip-js-toolkit';

import AdminPanel from './pages/AdminPanel';
import Cameras from './pages/Cameras';
import Home from './pages/Home';
import ResetPassword from './pages/ResetPassword';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import UserNotActive from './pages/UserNotActive';
import UserProfile from './pages/UserProfile';
import { AuthProvider } from './context';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <AuthProvider>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/reset-password">
            <ResetPassword />
          </Route>
          <Route path="/user-not-active">
            <UserNotActive />
          </Route>
          <Route path="/user-profile">
            <UserProfile />
          </Route>
          <Route path="/admin-panel">
            <AdminPanel />
          </Route>
          <Route path="/cameras">
            <Cameras />
          </Route>
        </Switch>
      </AuthProvider>
    </>
  );
}

export default App;
