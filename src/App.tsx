import React, { useEffect, useState } from 'react';

function App() {

    const [time, setTime] = useState(new Date());

    const timer = setInterval(() => {
       setTime(new Date()); 
    }, 1000);

   useEffect(() => {
    return () => {
     clearInterval(timer);
    };
   }, [timer]);

   let iseven = true;
   if (time.getTime() % 2 === 0) {
     iseven = true;
   }else{
     iseven = false;

   }
   

    return (
   <div>
    <h3>현재 시간 : {time.toLocaleTimeString()}</h3>
    <h3>홀짝 유무  = { iseven ? '짝' : '홀'} </h3>
    <h3>자기소개</h3>
    <h3>박은지</h3>
    <h3>학력</h3>
    <>
       <li>구리초</li>
       <li>토평중</li>
    </>
    </div>
  );
}

export default App;
