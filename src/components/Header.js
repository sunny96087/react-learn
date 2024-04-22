import React from "react";
import { Component } from "react";

class Header extends Component{ //繼承Component
    render() {
        const mystyle={paddingLeft:'3vw'}
        return(
            <header style={mystyle}>
                <h1>Wlcome to Taiwan Fruit Stand</h1>
            </header>
        )
        
    }

}

export default Header;