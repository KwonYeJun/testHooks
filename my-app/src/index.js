import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppTest from './test.tsx';

const RootComponent = () => {
  const [test, setTest] = useState('지금 데이터');

  return (
    <React.StrictMode>
      <App />
      <AppTest message = {test}/>
    </React.StrictMode>
  );
};

ReactDOM.render(<RootComponent />, document.getElementById('root'));

reportWebVitals();
