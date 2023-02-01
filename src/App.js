import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import { auth } from './firebase';
import { useAuthState } from "react-firebase-hooks/auth"
import Main from './components/Main';
import NotLogged from './components/NotLoged';



function App() {
  
  const [user] = useAuthState(auth)

  return (
  <>
  <nav>{user ? <SignOut/>  : <SignIn /> }</nav>
  {user ? <Main/>  : <NotLogged/> }
  </>
  );
}

export default App;
