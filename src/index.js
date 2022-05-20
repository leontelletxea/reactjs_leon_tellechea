import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './store/cart-context';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAN-tknVWC9EbFC2sFhvq324XsMQx4M36U",
  authDomain: "reactjs-leon-tellechea.firebaseapp.com",
  projectId: "reactjs-leon-tellechea",
  storageBucket: "reactjs-leon-tellechea.appspot.com",
  messagingSenderId: "626650703434",
  appId: "1:626650703434:web:14dfd02e5ee657195be8b3"
};

const app = initializeApp(firebaseConfig); 

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App/>
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
