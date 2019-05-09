import React from 'react';
import {Route} from 'react-router-dom'
import Login from './Components/Login'
import logo from './logo.svg';


import './App.css';
import Header from './Components/header';
import LeftNav from './Components/left-nav';

function App() {
  return (
    <div>
       <LeftNav />
        <div>
          <Route exact path = "/login" component={Login} />
        </div>
    </div>
  );
}

export default App;
