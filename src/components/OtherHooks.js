import React from "react";

import YourMeno from "./YourMeno";
import MyuseCallback from "./MyuseCallback";
import MyUseMeno from "./MyUseMeno";

const  OtherHooks=()=>{
    return(
        <div style={{paddingLeft:'3vw'}}>
            <h3>OtherHooks</h3>

            <hr />
            <YourMeno />
            <hr />
            <MyuseCallback />
            <hr />
            <MyUseMeno />
       </div>
    );
}

export default OtherHooks;