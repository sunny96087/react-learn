import React from "react";
import { Component } from "react";

class MyProps extends Component{ //繼承Component
    constructor(props){ //建構子(式)
        super(props);   //呼叫上(父)類別的建構子
        this.state={
            name:'Apple',
            price:0,
            desc:'含有大量的膳食纖維及維他命C',
            origin:'南投'
        }
    }

    render() {       
        return(
            <div>
                <h3>Welcome to {this.props.subject} (props 的應用)</h3>
                <p>{this.state.name},每公斤<span style={{color:'red'}}>{this.state.price}</span>元,{this.state.desc}</p>
                <button onClick={()=>{this.state.price>=100?this.setState({price:100}):this.setState({price:this.state.price+10})}}>按一下,提高售價</button>
                <button onClick={()=>{this.state.price<=0?this.setState({price:0}):this.setState({price:this.state.price-10})}}>按一下,降低售價</button>

                <YourProps origin={this.state.origin} /> 
                {/* <YourProps origin='日本富士山' /> */}
            </div>
        )        
    }
}
export default MyProps;


//另一個類別
class YourProps extends Component{
    render(){
        return(     
            <>       
            <p>產地:{this.props.origin}</p> 
            <a href="https://www.moa.gov.tw/">農業部</a>
            </>  
        );
    }
}


