import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Functionname () {
  return <h4> Я написал функцию по 4 дз (6 лекция), выводится если True </h4>
}

class Functionnametoo extends React.Component {
  render() {
  return <h4> Я написал функцию по 4 дз (6 лекция) выводится если Felse </h4>
  }
}

function Greeting(props) {
  const isLoggedIn  = props.isLoggedIn;
  if (isLoggedIn) {
    return <Functionname/>
  }
  return <Functionnametoo/>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Greeting isLoggedIn = {false} />,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
