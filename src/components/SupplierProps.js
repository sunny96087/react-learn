import React from "react";
import "../style.css";

export default function SupplierProps({id, name, address, tel}){
    const mystyle = {
        fontSize:"12px",
        color:"#888",
        display:"flex",
        flexWrap:"wrap",
        gap:"6px"
    }

    return(
        <div style={mystyle}>
            <span>{id}</span>
            <span>|</span>
            <span>{name}</span>
            <span>|</span>
            <span>{address}</span>
            <span>|</span>
            <span>{tel}</span>
        </div>
    )
}