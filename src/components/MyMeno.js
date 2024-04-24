import React from "react";
import { memo } from "react";

/**
   開發網站時，通常會讓子元件依附父元件 state / event，在父元件宣告 state / event , 利用 props 來傳遞給子元件，當使用 React.memo() 包裝函數組件時，會記住組建的渲染結果，只有組件的 props 發生變化時才會重新渲染 (re-render)。
 */

const  MyMeno = memo(({qty, addQty})=>{

    console.log("...子元件渲染");
    return(
        <div>
            <h3>MyMeno</h3>
            <button onClick={addQty}>plus qty</button>
            {qty.map((q,index)=>{
                return <p key={index}>{q}</p>
            })}
       </div>
    );
});

export default MyMeno;