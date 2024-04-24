import React from "react";
import { memo } from "react";
import MyMeno from "./MyMeno";

const YourMeno = () => {
  console.log("父元件重新渲染");

  const [count, setCount] = React.useState(0);
  const [qty, setQty] = React.useState([]);

  const addCount = () => {
    setCount((c) => c + 1);
  };

  const addQty = () => {
    setQty((q) => [...q, "新增數量"]);
  };
  return (
    <div>
      <h3>YourMeno</h3>

      {/* 掛上 MyMemo 子元件渲染, 具有 2 個屬性 */}
      <MyMeno  qty={qty} addQty={addQty}/>

      <div>
        <p>count : {count}</p>
        <button onClick={addCount}>ADD count</button>
      </div>
    </div>
  );
};

export default YourMeno;
