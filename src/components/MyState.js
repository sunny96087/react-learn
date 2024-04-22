import React from "react";
import { useState } from "react";
import "../style.css";

const MyState = () => {
  // 設定 qty 初值為 0
  const [qty, setQty] = useState(0);
  return (
    <div>
      <h3>state 應用範例</h3>
      <hr />
      {/* <button onClick={() => setQty(qty - 1)} className="custom-btn">click -</button>
      <span style={{ margin: "0 10px" }}>{qty}</span>
      <button onClick={() => setQty(qty + 1)} className="custom-btn">click +</button> */}
      <button
        onClick={() => (qty <= 0 ? setQty(0) : setQty(qty - 1))}
        className="custom-btn"
      >
        click -
      </button>
      <span style={{ margin: "0 10px" }}>{qty}</span>
      <button
        onClick={() => (qty >= 10 ? setQty(10) : setQty(qty + 1))}
        className="custom-btn"
      >
        click +
      </button>
    </div>
  );
};

export default MyState;
