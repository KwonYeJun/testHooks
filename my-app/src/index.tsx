import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import AppTest from './test';
import Count from './count';
import Timer from './timer';
const RootComponent = () => {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      
      {showTimer && <Timer props = {showTimer}/>}
      <button onClick={() => {setShowTimer(!showTimer)}}>Toggle Timer</button>
      <AppTest message='asdf'/>
      <Count />
    </div>
  );
};

ReactDOM.render(<RootComponent />, document.getElementById('root'));

