import React from "react";

export default function SupplierProps({id,name,address,tel}){
    const mystyle={
        fontSize:'0.8em',
        color:'gray'
    }

    return(
        <div style={mystyle}>
            <span>{id} | </span>
            <span style={{color:'red'}}>{name} | </span>
            <span>{address} | </span>
            <span>{tel} | </span>
        </div>
    )
}