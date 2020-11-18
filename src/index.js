import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


let reReanderEntireTree = () => {

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App store={store} state={store.getState()}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}


reReanderEntireTree(); 

store.subscribe(reReanderEntireTree);









// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();









