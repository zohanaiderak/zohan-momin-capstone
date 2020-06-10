import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './pages/Main/index';
import {BrowserRouter, Switch , Link, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Repair from './pages/Repair/Repair';

function App() {
  return (
      <BrowserRouter>
      <Header />
        <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/repair-form' component={Repair} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
