import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './pages/Main/Main';
import {BrowserRouter, Switch , Link, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Repair from './pages/Repair/Repair';
import Accessories from './pages/Accessories/Accessories';
import Phones from './pages/Phones/Phones';
import Order from './Components/Order/Order'

function App() {
  return (
      <BrowserRouter>
      <Header />
        <Switch>
            <Route path='/' exact component={MainPage} />
            <Route path='/repair-form' component={Repair} />
            <Route path='/phones' exact component={Phones} />
            <Route path='/phones/:id' exact component={Accessories} />
            <Route path='/phones/:id/:id' component={Order}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
