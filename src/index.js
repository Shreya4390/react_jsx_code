import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
//JSX use

function formatName(person_name) {
  return person_name.firstname + ' ' + person_name.lastname;
};

const greeting = 'Hey'
const person_name = {
  firstname: 'Shreya',
  lastname: 'Singh'
}

function timer() {
  const element = (
    <div>
      <h1>{greeting}, {formatName(person_name)} </h1>
      <h2>It is {new Date().toLocaleTimeString("en-IN")}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(timer, 1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
