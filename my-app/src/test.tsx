import React from 'react';
import Child from './childtest.tsx';

interface FirstProps {
   [key : string]: string;
}

const First: React.FC<FirstProps> = ({ message }) => {
  return (
    <h1>
      first 입니다. {message} <Child />
    </h1>
  );
};

export default First;
