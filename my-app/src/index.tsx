import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import AppTest from './test';
import Count from './count';

const RootComponent = () => {


  return (
    <div>
      {/* <App /> */}
      <AppTest message='asdf'/>
      <Count />
    </div>
  );
};

ReactDOM.render(<RootComponent />, document.getElementById('root'));

