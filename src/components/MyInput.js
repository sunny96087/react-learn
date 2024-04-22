import React from "react";

const MyInput=()=>{
   const [fruit,setFruit]=React.useState('');   //記錄與設定水果名稱
   const [price,setPrice]=React.useState(0);   //記錄與設定水果價格
   const [qty,setQty]=React.useState(0);   //記錄與設定水果數量
   const [total,setTotal]=React.useState(0);   //記錄與設定水果購買總額

   function showFruit(e){
        setFruit(e.target.value);
   }

    return(
        <div>
            <input
                type="text"
                placeholder="Enter Fruit" onChange={showFruit} />
                <span>{fruit}</span> <br />

            <input
                type="number"
                placeholder="Enter price" onChange={(e)=>setPrice(e.target.value)} />
                <span>{price}</span><br />

            <input
                type="number"
                placeholder="Enter qty" onChange={(e)=>setQty(e.target.value)} />
                <span>{qty}</span><br />

            <button onClick={()=>setTotal(price*qty)}>Order</button>
            <span>總計:{total} 元</span>

        </div>       
    )
}

export default MyInput;