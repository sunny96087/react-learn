import React from "react";
import { useParams } from "react-router-dom";

const  Product=()=>{
    let {fruitName}=useParams();
    return(
        <div style={{paddingLeft:'3vw'}}>
            <h3>台灣水果</h3>
            <hr />
            <p>{fruitName}</p>
       </div>
    );
}

export default Product;