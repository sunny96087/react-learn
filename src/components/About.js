import React from "react";
import Data from "./Data";

const  About=()=>{
    const [pattern,setPattern]=React.useState(Data);

    const element=pattern.map(d=>(
        <div
        id={d.id}
        key={d.id.toString()}
        className="about-div"   
        style={{backgroundColor:d.color}}    
        onClick={()=>{alert(d.color)}}
        >
            <p>{d.id},{d.color}</p>
        </div>
    ))

    return(
        <div style={{paddingLeft:'3vw'}}>
            <h3>關於我們</h3>
            <h4>Map practice</h4>
            <hr />
            {element}
       </div>
    );
}

export default About;