//package imports
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createStore } from 'redux';  configureStroe from @redux/toolkit
import { configureStore } from '@reduxjs/toolkit';

//file imports
import './index.css';
import App from './components/App';
import movies from './reducers';

const store = configureStore({
  reducer: {  // new way to mention/declare configureStore reducer
    movies
  }
});
console.log('store',store);
console.log('STATE',store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


