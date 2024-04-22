import React from "react";
import { useState, useEffect } from "react";

const YourUseEffect = () => {
  const [count, setCount] = useState(0);
  // 本身就是一個方法, 所以可以直接放箭頭函數
  const [calc, setCalc] = useState(() => {return 0;});

  const myData = {
    code: 200,
    msg: '成功',
    info: {
      id: count,
      name:'sunny',
      age: 22,
    }
  }

  useEffect(
    () => {
      console.log("Hello world!");
    }
  )

  // 每一次進頁面都會執行一次 ,[] 只執行第一次 ( 就一次 )
  // 只執行程式第一次 render 一次, 按下按鈕時不再次執行
  useEffect(
    () => {
      console.log('[calc]', myData);
      // console.log('[count]', myData); // 只執行一次, 因為按下按鈕時, calc 的值沒有變動
    },
    // [count]
    [calc]
  )

  return (
    <div style={{ paddingLeft: "3vw" }}>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>CALC</button>
      <p>{calc}</p>
    </div>
  );
};

export default YourUseEffect;
