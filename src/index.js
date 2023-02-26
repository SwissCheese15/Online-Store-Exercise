import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './App';
import Cart from './cart';
import Login from './login';
import Registration from './registration';
import Validation from './validation';
import reportWebVitals from './reportWebVitals';
// importing the "Redux Store"
import { Provider } from 'react-redux'
import store from "./Redux/Store"
// imports for routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // wrap the "Provider" around "App" to implement the Redux-Store
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={ <Login /> } />
          <Route path='/login/registration' element={ <Registration /> } />
          <Route path='/login/registration/validation' element={ <Validation /> } />
          <Route path='/' element={ <Home />} />
          <Route path='/cart' element={ <Cart /> } />
        </Routes>
      </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
