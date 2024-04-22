import React from "react";
import MyUseEffect from "./MyUseEffect";
import YourUseEffect from "./YourUseEffect";
import HisUseEffect from "./HisUseEffect";

const  Service=()=>{
    return(
        <div style={{paddingLeft:'3vw'}}>
            <h3>Service</h3>
            <MyUseEffect />
            <hr />
            <YourUseEffect />
            <hr />
            <HisUseEffect />
       </div>
    );
}

export default Service;