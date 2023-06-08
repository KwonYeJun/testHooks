import React, { useState } from 'react';
import Child from './childtest.tsx';
import { TestContext } from './conText.tsx';

interface FirstProps {
  message: string;
}

const First: React.FC<FirstProps> = ({ message }) => {
  const [test, setTest] = useState('지금 데이터');
  const first = '이제 콘테트 값이 없어서 그랬네...';
  // setTest('더 더 더 더 더ㅓ');
  return (
    <h1>
      first 입니다. {message}
      <TestContext.Provider value={{ test, setTest,first }}>
        <Child />
      </TestContext.Provider>
    </h1>
  );
};

export default First;
