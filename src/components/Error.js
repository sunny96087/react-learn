import React from "react";
import { Link } from 'react-router-dom';

const  Error=()=>{
    return(
        <div style={{paddingLeft:'3vw'}}>
            <h3>Error 404</h3>
            <Link to="/">返回首頁</Link>
       </div>
    );
}

export default Error;