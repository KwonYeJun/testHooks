import React, {useState, useEffect} from 'react';

export default function Count(){
const [test, settest] = useState(1);
const countAdd = () => {
settest(test + 1);
}

return (
  <div>
    <button onClick={countAdd}></button>
    <span>카운팅 획수 : {test}</span>
  </div>
)



}