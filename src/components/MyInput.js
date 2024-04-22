// import React, { useState } from "react";
import React from "react";

const MyInput = () => {
  const [name, setName] = React.useState(""); // 紀錄 & 設定水果名稱
  const [price, setPrice] = React.useState(0); // 紀錄 & 設定水果價格
  const [qty, setQty] = React.useState(0); // 紀錄 & 設定水果數量
  const [total, setTotal] = React.useState(0); // 紀錄 & 設定水果總額

  function showFruit(e) {
    setName(e.target.value);
  }

  return (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    gap:'12px',
    padding:'12px',
    border: '1px solid #ccc',
    margin:'12px',
    borderRadius:'8px'
  }}>
    <label >名稱：
    <input type="text" placeholder="enter name" onChange={showFruit} style={{width:'60%'}}/>
    <span>{name}</span>
    </label>

    <label>單價：
    <input type="number" placeholder="enter price" onChange={(e)=>setPrice(e.target.value)}  style={{width:'60%'}}/>
    <span>{price}</span>
    </label>

    <label>數量：
    <input type="number" placeholder="enter qty" onChange={(e)=>setQty(e.target.value)}  style={{width:'60%'}}/>
    <span>{qty}</span>
    </label>

    <button onClick={()=>setTotal(price*qty)}>算錢</button>
    <div>總額：{total}</div>
  </div>
  )
};

export default MyInput;
