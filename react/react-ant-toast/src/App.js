import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <button onClick={() => openNotificationWithIcon('success')}>Success</button>
      <button onClick={() => openNotificationWithIcon('info')}>Info</button>
      <button onClick={() => openNotificationWithIcon('warning')}>Warning</button>
      <button onClick={() => openNotificationWithIcon('error')}>Error</button>
      <button onClick={() => openNotificationWithIcon('loading')}>Loading</button>
    </div>
  );
}

export default App;
