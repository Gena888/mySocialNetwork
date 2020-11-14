import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  { id: 1, likes: 121, message: 'hallow it.s me' },
  { id: 2, likes: 231, message: 'it is my firs post' },
  { id: 3, likes: 321, message: 'second post hear' }
]

let dialogsData = [
  { id: 1, name: 'gena' },
  { id: 2, name: 'sasha' },
  { id: 3, name: 'dima' },
  { id: 4, name: 'pasha' },
  { id: 5, name: 'gleb' }
]

let messagesData = [
  { id: 1, message: 'hi' },
  { id: 2, message: 'how are you' },
  { id: 3, message: 'yo' },
  { id: 4, message: 'yo' },
  { id: 5, message: 'yo' }
]


ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

