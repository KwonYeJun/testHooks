import React, { useState,useContext } from "react";
import {TestContext} from './conText.tsx';

interface ChildTestProps {
  name: string;
}

const ChildTest: React.FC<ChildTestProps> = () => {
  const { first } = useContext(TestContext);
  console.log(first);
  const [testName, setTestName] = useState(first);

  return (
    <div>
      child 입니다. {testName}을 전달받았습니다.
    </div>
  );
};

export default ChildTest;
