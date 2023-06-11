import React, { useState, useEffect } from 'react';

interface testType {
  props : boolean
}

const Timer = (props : testType) => {
  const [state, setState] = useState<string>(''); // 예시로 state의 타입을 string으로 지정했습니다.

  useEffect(() =>{
// 디펜던시에 빈 값을 넣어 처음 마운팅 될 떄 불러 오지만 그 뒤에 clear를 해주어서 종료를 할 수 있게끔 작업을 해보았따.
    const timer = setInterval(() => {
      console.log("timer 돌아가는중..");
    }, 1000);
    return () => {
      // 정리할 내용이 들어간다.
      clearInterval(timer);
      console.log("timer가 종료 됩니다.");
    }
  },[]);

 
  return (
    <div>
     <span>타이머를 시작 합니다 콘솔을 보세요</span>
    </div>
  );
}

export default Timer;