import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import  LogoutButton from './components/LogoutButton';
import  Profile from './components/Profile';



  function App() {
   const { isloading } = useAuth0();

   if (isloading) return <div>Loading...</div>

    return (
      <> 
      <LoginButton/>
      <LogoutButton/>
      <Profile/>
      </>
      
    );

      }
    

  export default App;