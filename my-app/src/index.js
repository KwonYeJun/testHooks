import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppTest from './test.tsx';

const RootComponent = () => {


  return (
    <React.StrictMode>

      <App />
      <AppTest />

    </React.StrictMode>
  );
};

ReactDOM.render(<RootComponent />, document.getElementById('root'));

reportWebVitals();
