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


// console.log('BEFORE STATE',store.getState());

// store.dispatch({
//   type : 'ADD_MOVIES',
//   movies : [ { name : 'Superman' } ]
// });

// console.log('AFTER STATE',store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* taking data from store prop rather than data.js file */}
    <App store = { store }/>  
  </React.StrictMode>
);

// ReactDOM.render(<App store={store}/>,document.getElementById('root'));


