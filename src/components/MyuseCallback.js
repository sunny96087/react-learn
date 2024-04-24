import React from "react";
import MyMeno from "./MyMeno";

/*

  React useCallback Hook, 傳回一個已被記憶的回扣函數
  將被記憶的回扣的函數看成快取的一值，可以不用重新計算
  所以可以隔離一些要密集處理函數，就不用重新渲染與執行，
  可以提高效能。

*/

const MyuseCallback = () => {
  console.log("父元件重新渲染");

  const [count, setCount] = React.useState(0);
  const [qty, setQty] = React.useState([]);

  const addCount = () => {
    setCount((c) => c + 1);
  };

  const addQty = React.useCallback(() => {
    setQty((q) => [...q, "新增數量"]);
  }, [qty]);

  return (
    <div>
      <h3>MyuseCallback</h3>

      <MyMeno  qty={qty} addQty={addQty}/>

      <div>
        <p>count : {count}</p>
        <button onClick={addCount}>ADD count</button>
      </div>
    </div>
  );
};

export default MyuseCallback;
