import './App.scss';
import React from "react";
import {
  BrowserRouter,
  Router,
  Route,
  Routes,
  Link,
  Outlet
} from 'react-router-dom';
import HomeScreen from './Views/HomeScreen/HomeScreen';
import LoginScreen from './Views/LoginScreen/LoginScreen'
import SignInScreen from './Views/SignIn/SignInScreen';
import SignUp from './Views/SignUp/SignUp';
import { Home } from '@mui/icons-material';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginScreen />} />
        <Route path="/connexion" element={<SignInScreen />} />
        <Route path="/accueil" element={<HomeScreen />} />
        <Route path='inscription' element={<SignUp/>}/>
        <Route path="/films" element={<HomeScreen type="films" />} />
        <Route path="/series" element={<HomeScreen type="series" />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
