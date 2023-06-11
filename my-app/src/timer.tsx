import React, { useState, useEffect } from 'react';

interface testType {
  props : boolean
}

const Timer = (props : testType) => {
  const [state, setState] = useState<string>(''); // 예시로 state의 타입을 string으로 지정했습니다.

  useEffect(() =>{

    const timer = setInterval(() => {
      console.log("timer 돌아가는중..");
    }, 1000);
    return () => {
      // 정리할 내용이 들어간다.
      clearInterval(timer);
      console.log("timer가 종료 됩니다.");
    }
  },[]);

  useEffect(() => {
    // 이펙트 동작
  }, []);

  return (
    <div>
     <span>타이머를 시작 합니다 콘솔을 보세요</span>
    </div>
  );
}

export default Timer;