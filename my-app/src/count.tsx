import React, {useState, useEffect, SyntheticEvent, ChangeEvent} from 'react';

export default function Count(){
const [test, settest] = useState(1);
const countAdd = () => {
settest(test + 1);
}
const [name, setname] = useState('');

// e 이벤트 타입 ChangeEvent<HTMLInputElement>
const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  setname(e.target.value);
}
// 렌더링 될때마다 매번 실행됨
useEffect(() => {
  console.log('렌더링')
})
// 무운팅 + 카운트가 변활 떄
useEffect(() => {
  console.log('이건 count 변활 때')
},[test])
// 무운팅 + name가 변활 떄
useEffect(() => {
  console.log('이건 name 변활 때')
},[name])
//이건 마운트 되서 한번만 실행해
useEffect(() => {
  console.log('이건 마운트 되서 한번만 실행해');
},[])

return (
  <div>
    <button onClick={countAdd}>클릭시 증가</button>
    <span>카운팅 획수 : {test}</span>
    <input type="text" value={name} onChange={handleInputChange}/>
    <span>{name}</span>
  </div>
)



}