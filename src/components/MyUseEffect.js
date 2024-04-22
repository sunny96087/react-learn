import React from "react";
import { useState, useEffect } from "react";

const MyUseEffect = () => {
  const [count, setCount] = useState(0);
  const [calc, setCalc] = useState(0);

  // 是一個 React Hook, 可以讓元件與外部系統進行同步
  // useEffect ( 參數 Parameters 1, 參數 Parameters 2 )
  // useEffect ( callback function, Array), 第二個參數可以審略
  // Array, list( 陣列 ), 會與先前的值進行比較, 若省略 => 則在 render 時會重新執行 ( re-run )
  useEffect(() => {
    setCalc(count * 2);
    console.log("calc=", calc);
  }, [count]);

  return (
    <div style={{ paddingLeft: "3vw" }}>
      <h3>MyUseEffect</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>CALC</button>
      <p>{calc}</p>
    </div>
  );
};

export default MyUseEffect;
