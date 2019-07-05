import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const age = 18;
  const styObj = { color: 'blue' }
  const foo = () => {
    console.log('blue')
  }
  const bar = () => {
    return function() {
      console.log('bar')
    }
  }
  const lis = [
    <li>1</li>,
    <li>2</li>,
    <li>3</li>,
  ]
  const names = ['name1', 'name2', 'name3']
  const nameNodes = names.map((name, index) => {
    return (<div style={styObj}>{name}</div>)
  })

  return (
    <div>
      <p style={{color: 'red'}} onClick={ () => {
        console.log('red')
      }}> { age } </p>
      <p style={ styObj } onClick={foo}>{ age }</p>
      <p onClick={bar()}>{ age }</p>
      { lis }
      {
        names.map((name, index) => {
          return (<div>{name}</div>)
        })
      }
    </div>
  );
}

export default App;
